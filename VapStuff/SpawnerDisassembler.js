var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Action from '../lib/org/bukkit/event/block/Action.js';
import EquipmentSlot from '../lib/org/bukkit/inventory/EquipmentSlot.js';
import ItemFlag from '../lib/org/bukkit/inventory/ItemFlag.js';
import ItemStack from '../lib/org/bukkit/inventory/ItemStack.js';
import Material from '../lib/org/bukkit/Material.js';
import Sound from '../lib/org/bukkit/Sound.js';
import { Subscribe } from './EventListener.js';
import Module from './Module.js';
let SpawnerDisassembler = class SpawnerDisassembler extends Module {
    constructor() {
        super(...arguments);
        this.PICK_NAME = this.colorText('&#2CDA9DSpawner Disassembler');
        this.INFO = '&7Once activated, this pickaxe can carefully disassemble\n' +
            '&7a mob spawner without destroying, allowing you to collect it.\n' +
            '&7However, it only works &bonce&7, so choose carefully.';
        this.CANNOT_USE = 'You cannot use this pickaxe normally.';
        this.LEARN_MORE = '&8(Hover over this item to learn more)';
        this.SPAWNER_TEMPLATE = (mobName) => this.colorText(`&b${mobName} Spawner`);
        this.SPAWNER_TEST = new RegExp(`^${this.SPAWNER_TEMPLATE('([\\w ]+)')}$`);
        this.LEVEL_COST = 85;
    }
    // Hooks
    onEnable() {
        this.plugin.extraRecipes.addRecipe('spawnerDisassembler', {
            ingredients: [
                [Material.PRISMARINE_CRYSTALS, 10],
                [Material.ENDER_EYE, 6],
                [Material.GHAST_TEAR, 2],
                [Material.NETHER_STAR, 1]
            ],
            advancedIngredients: [
                [
                    Material.NETHERITE_PICKAXE,
                    item => {
                        return item.getDurability() === 0;
                    }
                ]
            ],
            checkWorkbench(block) {
                if (block.getType() !== Material.CAULDRON)
                    return false;
                const cauldronData = block.getBlockData();
                return cauldronData.getLevel() === cauldronData.getMaximumLevel();
            },
            createResult: () => {
                const result = new ItemStack(Material.NETHERITE_PICKAXE);
                const meta = result.getItemMeta();
                meta.setDisplayName(this.PICK_NAME);
                meta.setLore(this.colorText('&7Status: &8Not Activated\n' +
                    `&7Level Cost: &a${this.LEVEL_COST}\n\n` +
                    this.INFO +
                    '\n\n&8&oRight click to activate').split('\n'));
                meta.addItemFlags([ItemFlag.HIDE_ATTRIBUTES]);
                result.setItemMeta(meta);
                return result;
            },
            sound: Sound.ITEM_BUCKET_EMPTY,
            postRecipe(where) {
                const block = where.getBlock();
                const cauldronData = block.getBlockData();
                cauldronData.setLevel(0);
                block.setBlockData(cauldronData);
            }
        });
    }
    onDisable() {
        this.plugin.extraRecipes.removeRecipe('spawnerDisassembler');
    }
    onBlockBreak(listener, event) {
        const player = event.getPlayer();
        const inv = player.getInventory();
        const item = inv.getItemInMainHand();
        const meta = item.getItemMeta();
        if (!meta)
            return;
        const name = meta.getDisplayName();
        const block = event.getBlock();
        const blockMat = block.getType();
        if (name === this.PICK_NAME) {
            if (this.isPickActivated(item) && this.isSpawner(blockMat)) {
                event.setCancelled(true);
                item.setAmount(0);
                player
                    .getWorld()
                    .playSound(player.getLocation(), Sound.ENTITY_ITEM_BREAK, 1, 1);
                const spawnerState = block.getState();
                block.breakNaturally();
                const spawnerItem = new ItemStack(blockMat);
                const spawnerMeta = spawnerItem.getItemMeta();
                spawnerMeta.setDisplayName(this.SPAWNER_TEMPLATE(this.capitalizeWords(spawnerState.getCreatureTypeName())));
                spawnerItem.setItemMeta(spawnerMeta);
                this.addGlowEffect(spawnerItem);
                player.getWorld().dropItem(block.getLocation(), spawnerItem);
            }
            else {
                event.setCancelled(true);
                player
                    .getWorld()
                    .playSound(player.getLocation(), Sound.BLOCK_FIRE_EXTINGUISH, 1, 1);
                this.tellPlayer(player, `${this.CANNOT_USE} ${this.LEARN_MORE}`);
            }
        }
    }
    onBlockPlace(listener, event) {
        const block = event.getBlockPlaced();
        if (this.isSpawner(block.getType())) {
            const spawnerName = event
                .getItemInHand()
                .getItemMeta()
                .getDisplayName();
            if (this.SPAWNER_TEST.test(spawnerName)) {
                const [, mobName] = this.SPAWNER_TEST.exec(spawnerName);
                const spawner = block.getState();
                spawner.setCreatureTypeByName(mobName.toLowerCase());
                spawner.update();
            }
        }
    }
    onPlayerInteract(listener, event) {
        const player = event.getPlayer();
        const inv = player.getInventory();
        const item = inv.getItemInMainHand();
        const meta = item.getItemMeta();
        if (event.getHand() !== EquipmentSlot.HAND)
            return;
        if (!meta)
            return;
        const name = meta.getDisplayName();
        if (name === this.PICK_NAME &&
            !this.isPickActivated(item) &&
            this.isRightClick(event.getAction())) {
            event.setCancelled(true);
            const level = player.getLevel();
            if (level < this.LEVEL_COST) {
                player
                    .getWorld()
                    .playSound(player.getLocation(), Sound.BLOCK_FIRE_EXTINGUISH, 1, 1);
                this.tellPlayer(player, `You're &aExperience Level &ris not high enough to activate this. ${this.LEARN_MORE}`);
            }
            else {
                this.setPlayerDisplayTotalExperience(player, this.getPlayerDisplayTotalExperience(player) - this.levelToExp(this.LEVEL_COST));
                meta.setLore(this.colorText('&7Status: &aActivated\n\n' + this.INFO).split('\n'));
                item.setItemMeta(meta);
                this.addGlowEffect(item);
                player
                    .getWorld()
                    .playSound(player.getLocation(), Sound.BLOCK_BEACON_POWER_SELECT, 1, 1);
            }
        }
    }
    onEntityDamageByEntity(listener, event) {
        if (!event.getDamager)
            return; // I have no idea why this happens
        const damager = event.getDamager();
        if (this.isPlayer(damager)) {
            const inv = damager.getInventory();
            const item = inv.getItemInMainHand();
            const meta = item.getItemMeta();
            if (!meta)
                return;
            const name = meta.getDisplayName();
            if (name === this.PICK_NAME) {
                event.setCancelled(true);
                this.tellPlayer(damager, `${this.CANNOT_USE} ${this.LEARN_MORE}`);
            }
        }
    }
    // Internals
    isSpawner(mat) {
        return mat === Material.SPAWNER;
    }
    isRightClick(action) {
        return (action === Action.RIGHT_CLICK_AIR || action === Action.RIGHT_CLICK_BLOCK);
    }
    isPickActivated(pick) {
        return pick.containsEnchantment(this.DUMMY_ENCH);
    }
};
SpawnerDisassembler = __decorate([
    Subscribe
], SpawnerDisassembler);
export default SpawnerDisassembler;
