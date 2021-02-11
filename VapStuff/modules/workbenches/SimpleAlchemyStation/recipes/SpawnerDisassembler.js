"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_js_1 = require("../../../../../lib/org/bukkit/entity/Player.js");
const Action_js_1 = require("../../../../../lib/org/bukkit/event/block/Action.js");
const GameMode_js_1 = require("../../../../../lib/org/bukkit/GameMode.js");
const EquipmentSlot_js_1 = require("../../../../../lib/org/bukkit/inventory/EquipmentSlot.js");
const ItemFlag_js_1 = require("../../../../../lib/org/bukkit/inventory/ItemFlag.js");
const ItemStack_js_1 = require("../../../../../lib/org/bukkit/inventory/ItemStack.js");
const Material_js_1 = require("../../../../../lib/org/bukkit/Material.js");
const Sound_js_1 = require("../../../../../lib/org/bukkit/Sound.js");
const EventListener_js_1 = require("../../../../services/EventListener.js");
const Module_js_1 = require("../../../../types/Module.js");
const util_js_1 = require("../../../../util.js");
let SpawnerDisassembler = class SpawnerDisassembler extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.PICK_NAME = this.colorText('&#2CDA9DSpawner Disassembler');
        this.INFO = '&7Once activated, this pickaxe can\n'
            + '&7carefully disassemble\n'
            + '&7a mob spawner without destroying it,\n'
            + '&7allowing you to collect it.\n'
            + '&7However, it only works &bonce&7,\n'
            + '&7so choose carefully.';
        this.CANNOT_USE = 'You cannot use this pickaxe normally.';
        this.LEARN_MORE = '&8(Hover over this item to learn more)';
        this.SPAWNER_TEMPLATE = (mobName) => this.colorText(`&b${mobName} Spawner`);
        this.SPAWNER_TEST = new RegExp(`^${this.SPAWNER_TEMPLATE('([\\w ]+)')}$`);
        this.LEVEL_COST = 85;
        this.WORKBENCH_ID = 'simpleAlch';
        this.ID = 'spawnerDisassembler';
    }
    get name() { return 'Spawner Disassembler'; }
    // Hooks
    onEnable() {
        this.plugin.extraRecipes.addRecipe(this.WORKBENCH_ID, this.ID, {
            name: 'Spawner Disassembler',
            ingredients: [
                [Material_js_1.default.PRISMARINE_CRYSTALS, 10],
                [Material_js_1.default.ENDER_EYE, 6],
                [Material_js_1.default.GHAST_TEAR, 2],
                [Material_js_1.default.NETHER_STAR, 1],
            ],
            advancedIngredients: [
                [
                    Material_js_1.default.NETHERITE_PICKAXE,
                    item => {
                        const isNotBroken = item.getDurability() === 0;
                        const meta = item.getItemMeta();
                        const isNotDisassembler = meta.getDisplayName() !== this.PICK_NAME;
                        return isNotBroken && isNotDisassembler;
                    },
                ],
            ],
            createResult: (env) => {
                const result = new ItemStack_js_1.default(Material_js_1.default.NETHERITE_PICKAXE);
                const meta = result.getItemMeta();
                meta.setDisplayName(this.PICK_NAME);
                switch (env) {
                    case 1 /* GUIDE_LIST */:
                    case 2 /* GUIDE_RESULT */: {
                        meta.setLore(util_js_1.colorText(this.INFO).split('\n'));
                        break;
                    }
                    case 0 /* DEFAULT */:
                    default: {
                        meta.setLore(this.colorText(`${'&7Status: &8Not Activated\n'
                            + `&7Level Cost: &a${this.LEVEL_COST}\n\n`}${this.INFO}\n\n&8&oRight click to activate`).split('\n'));
                        break;
                    }
                }
                meta.addItemFlags([ItemFlag_js_1.default.HIDE_ATTRIBUTES]);
                result.setItemMeta(meta);
                return result;
            },
            waterUsage: 3,
        });
    }
    onDisable() {
        this.plugin.extraRecipes.removeRecipe(this.WORKBENCH_ID, this.ID);
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
                    .playSound(player.getLocation(), Sound_js_1.default.ENTITY_ITEM_BREAK, 1, 1);
                const spawnerState = block.getState();
                block.breakNaturally();
                const spawnerItem = new ItemStack_js_1.default(blockMat);
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
    }
    onPlayerInteract(listener, event) {
        const player = event.getPlayer();
        const inv = player.getInventory();
        const item = inv.getItemInMainHand();
        const meta = item.getItemMeta();
        if (event.getHand() !== EquipmentSlot_js_1.default.HAND)
            return;
        if (!meta)
            return;
        const name = meta.getDisplayName();
        if (name === this.PICK_NAME
            && !this.isPickActivated(item)
            && this.isRightClick(event.getAction())) {
            event.setCancelled(true);
            const level = player.getLevel();
            const isCreative = player.getGameMode() === GameMode_js_1.default.CREATIVE;
            if (level < this.LEVEL_COST && !isCreative) {
                player
                    .getWorld()
                    .playSound(player.getLocation(), Sound_js_1.default.BLOCK_FIRE_EXTINGUISH, 1, 1);
                this.tellPlayer(player, `You're &aExperience Level &ris not high enough to activate this. ${this.LEARN_MORE}`);
            }
            else {
                if (!isCreative) {
                    this.smartLvlDecr(player, this.LEVEL_COST);
                }
                meta.setLore(this.colorText(`&7Status: &aActivated\n\n${this.INFO}`).split('\n'));
                item.setItemMeta(meta);
                this.addGlowEffect(item);
                player
                    .getWorld()
                    .playSound(player.getLocation(), Sound_js_1.default.BLOCK_BEACON_POWER_SELECT, 1, 1);
            }
        }
    }
    onEntityDamageByEntity(listener, event) {
        if (!event.getDamager)
            return; // I have no idea why this happens
        const damager = event.getDamager();
        if (Player_js_1.default.$isInstance(damager)) {
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
        return mat === Material_js_1.default.SPAWNER;
    }
    isRightClick(action) {
        return (action === Action_js_1.default.RIGHT_CLICK_AIR || action === Action_js_1.default.RIGHT_CLICK_BLOCK);
    }
    isPickActivated(pick) {
        return pick.containsEnchantment(this.DUMMY_ENCH);
    }
};
SpawnerDisassembler = __decorate([
    EventListener_js_1.Subscribe
], SpawnerDisassembler);
exports.default = SpawnerDisassembler;
