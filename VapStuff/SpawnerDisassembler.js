var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BlockFace from '../lib/org/bukkit/block/BlockFace.js';
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
        this.INFO = '&7Once activated, this pickaxe can\n' +
            '&7carefully disassemble\n' +
            '&7a mob spawner without destroying it,\n' +
            '&7allowing you to collect it.\n' +
            '&7However, it only works &bonce&7,\n' +
            '&7so choose carefully.';
        this.CANNOT_USE = 'You cannot use this pickaxe normally.';
        this.LEARN_MORE = '&8(Hover over this item to learn more)';
        this.NOW_READY = 'Now you\'re ready to perform &binfusion&r!';
        this.SPAWNER_TEMPLATE = (mobName) => this.colorText(`&b${mobName} Spawner`);
        this.SPAWNER_TEST = new RegExp(`^${this.SPAWNER_TEMPLATE('([\\w ]+)')}$`);
        this.LEVEL_COST = 85;
        this.hintsShown = new Map();
    }
    get name() { return 'Spawner Disassembler'; }
    // Hooks
    onEnable() {
        for (let i = 0; i < 4 /* MAX_HINT */; i++) {
            this.hintsShown.set(i, []);
        }
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
                        const isNotBroken = item.getDurability() === 0;
                        const meta = item.getItemMeta();
                        const isNotDisassembler = meta.getDisplayName() !== this.PICK_NAME;
                        return isNotBroken && isNotDisassembler;
                    }
                ]
            ],
            checkWorkbench: this.isPrepSimpleAlch.bind(this),
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
            sound: [Sound.ITEM_BUCKET_EMPTY, Sound.BLOCK_FIRE_EXTINGUISH],
            postRecipe(where) {
                const block = where.getBlock();
                const cauldronData = block.getBlockData();
                cauldronData.setLevel(0);
                block.setBlockData(cauldronData);
                const heatSource = where.clone().add(0, -1, 0).getBlock();
                switch (heatSource.getType()) {
                    case Material.LAVA:
                        heatSource.setType(Material.OBSIDIAN);
                        break;
                }
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
        else if (this.isSimpleAlchHeat(block.getType())) {
            const where = block.getLocation();
            this.onSimpleAlchNewPrep(where.clone().add(0, 1, 0).getBlock(), event.getPlayer());
        }
        else if (this.isSimpleAlchMat(block.getType())) {
            let where = block.getLocation();
            switch (block.getType()) {
                case Material.CAULDRON:
                    break;
                case Material.REDSTONE_TORCH:
                    for (let i = 0; i < 4; i++) {
                        const dxz = this.rotCCW([0, 1], i);
                        const newWhere = where.clone().add(dxz[0], 0, dxz[1]);
                        if (newWhere.getBlock().getType() === Material.CAULDRON) {
                            where = newWhere;
                            break;
                        }
                    }
                    break;
                case Material.REDSTONE_WIRE:
                    for (let i = 0; i < 4; i++) {
                        const dxz = this.rotCCW([1, 1], i);
                        const newWhere = where.clone().add(dxz[0], 0, dxz[1]);
                        if (newWhere.getBlock().getType() === Material.CAULDRON) {
                            where = newWhere;
                            break;
                        }
                    }
                    break;
            }
            const alchBlock = where.getBlock();
            if (alchBlock.getType() !== Material.CAULDRON)
                return;
            this.onSimpleAlchNewMat(alchBlock, event.getPlayer());
        }
    }
    onPlayerBucketEmpty(listener, event) {
        const block = event.getBlock();
        this.runTaskLater(() => {
            if (this.isSimpleAlchHeat(block.getType())) {
                const player = event.getPlayer();
                const where = block.getLocation();
                this.onSimpleAlchNewPrep(where.clone().add(0, 1, 0).getBlock(), player);
            }
        }, 1);
    }
    onCauldronLevelChange(listener, event) {
        const player = event.getEntity();
        if (!this.isPlayer(player))
            return;
        const cauldron = event.getBlock();
        const cauldronData = cauldron.getBlockData();
        if (event.getNewLevel() !== cauldronData.getMaximumLevel())
            return;
        this.runTaskLater(() => {
            this.onSimpleAlchNewPrep(cauldron, player);
        }, 1);
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
                this.smartLvlDecr(player, this.LEVEL_COST);
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
    handleHint(player, hint, handler, childHints) {
        const shownTo = this.hintsShown.get(hint);
        const uuid = player.getUniqueId();
        if (!shownTo.includes(uuid)) {
            shownTo.push(uuid);
            if (childHints) {
                childHints.forEach(childHint => {
                    const childShownTo = this.hintsShown.get(childHint);
                    if (!childShownTo.includes(uuid))
                        childShownTo.push(uuid);
                });
            }
            handler();
        }
    }
    handleHintArea(area, radius, hint, handler, childHints) {
        const players = Array.from(this.plugin.server.getOnlinePlayers())
            .filter(player => {
            return player.getWorld() === area.getWorld()
                && player.getLocation().distanceSquared(area) < radius ** 2;
        });
        players.forEach(player => {
            this.handleHint(player, hint, () => { handler(player); }, childHints);
        });
    }
    // Simple Alchemy Station
    isSimpleAlch(block) {
        if (block.getType() !== Material.CAULDRON)
            return false;
        const where = block.getLocation();
        for (let i = 0; i < 4; i++) {
            const dxzDust = this.rotCCW([1, 1], i);
            const dxzTorch = this.rotCCW([0, 1], i);
            if (where.clone().add(dxzDust[0], 0, dxzDust[1]).getBlock().getType() !== Material.REDSTONE_WIRE)
                return false;
            if (where.clone().add(dxzTorch[0], 0, dxzTorch[1]).getBlock().getType() !== Material.REDSTONE_TORCH)
                return false;
        }
        return true;
    }
    isPrepSimpleAlch(block, ignoreHints = false) {
        if (!this.isSimpleAlch(block))
            return false;
        const cauldronData = block.getBlockData();
        const isLeveled = cauldronData.getLevel() === cauldronData.getMaximumLevel();
        const heatSource = block.getRelative(BlockFace.DOWN);
        const isHeatSource = this.isSimpleAlchHeat(heatSource.getType());
        if (!ignoreHints) {
            if (isLeveled && this.isSimpleAlchLowHeat(heatSource.getType())) {
                this.handleHintArea(block.getLocation(), 5, 3 /* SIMPLE_ALCH_LOW_HEAT */, player => {
                    this.tellPlayer(player, `&oHmmm. It seems this &f&oheat source&r&o is not hot enough.`);
                });
            }
            else if (!isLeveled || !isHeatSource) {
                this.handleHintArea(block.getLocation(), 5, 2 /* SIMPLE_ALCH_NO_PREP_CRAFT */, player => {
                    this.tellPlayer(player, `&oPsst. You might want to &b&oprepare&r&o your station first.`);
                });
            }
        }
        return isLeveled && isHeatSource;
    }
    isSimpleAlchMat(mat) {
        return [Material.REDSTONE_WIRE, Material.REDSTONE_TORCH, Material.CAULDRON].includes(mat);
    }
    isSimpleAlchHeat(mat) {
        return Material.LAVA === mat;
    }
    isSimpleAlchLowHeat(mat) {
        return [
            Material.MAGMA_BLOCK,
            Material.FIRE,
            Material.TORCH,
            Material.REDSTONE_TORCH,
            Material.SOUL_TORCH,
            Material.WALL_TORCH,
            Material.REDSTONE_WALL_TORCH,
            Material.SOUL_WALL_TORCH,
            Material.LANTERN,
            Material.REDSTONE_LAMP,
            Material.SOUL_LANTERN,
            Material.SEA_LANTERN,
            Material.CAMPFIRE,
            Material.SOUL_CAMPFIRE,
            Material.BREWING_STAND,
        ].includes(mat);
    }
    onSimpleAlchNewMat(block, player) {
        if (this.isSimpleAlch(block)) {
            if (this.isPrepSimpleAlch(block, true)) {
                this.handleHint(player, 1 /* SIMPLE_ALCH_PREP */, () => {
                    this.tellPlayer(player, `You've just made a &a&lprepared&a &fSimple Alchemy Station&r! ${this.NOW_READY}`);
                }, [0 /* SIMPLE_ALCH_MADE */]);
            }
            else {
                this.handleHint(player, 0 /* SIMPLE_ALCH_MADE */, () => {
                    this.tellPlayer(player, `You've just made a &fSimple Alchemy Station&r! Don't forget to &bprepare&r your station!`);
                });
            }
        }
    }
    onSimpleAlchNewPrep(block, player) {
        if (this.isPrepSimpleAlch(block, true)) {
            this.handleHint(player, 1 /* SIMPLE_ALCH_PREP */, () => {
                this.tellPlayer(player, `You've just &a&lprepared &ra &fSimple Alchemy Station&r! ${this.NOW_READY}`);
            }, [0 /* SIMPLE_ALCH_MADE */]);
        }
    }
};
SpawnerDisassembler = __decorate([
    Subscribe
], SpawnerDisassembler);
export default SpawnerDisassembler;
