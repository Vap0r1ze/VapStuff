"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemBuilder_js_1 = require("../../lib/com/smc/utils/ItemBuilder.js");
const Bukkit_js_1 = require("../../lib/org/bukkit/Bukkit.js");
const Player_js_1 = require("../../lib/org/bukkit/entity/Player.js");
const InventoryAction_js_1 = require("../../lib/org/bukkit/event/inventory/InventoryAction.js");
const ItemStack_js_1 = require("../../lib/org/bukkit/inventory/ItemStack.js");
const Material_js_1 = require("../../lib/org/bukkit/Material.js");
const CommandManager_js_1 = require("../services/CommandManager.js");
const EventListener_js_1 = require("../services/EventListener.js");
const Module_js_1 = require("../types/Module.js");
const DefaultPage_js_1 = require("./guide/DefaultPage.js");
let Guide = class Guide extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.guideViews = {};
        this.expectingClose = {};
        this.icons = {
            null: new ItemBuilder_js_1.default(Material_js_1.default.BLACK_STAINED_GLASS_PANE)
                .setDisplayName(' ')
                .build(),
            close: new ItemBuilder_js_1.default(Material_js_1.default.BARRIER)
                .setDisplayName(this.colorText('&cClose'))
                .build(),
            back: (name) => new ItemBuilder_js_1.default(Material_js_1.default.ARROW)
                .setDisplayName(this.colorText('&aGo Back'))
                .setLore([this.colorText(`&7To ${name}`)])
                .build(),
        };
    }
    get name() { return 'Vap Guide'; }
    onEnable() {
    }
    onDisable() {
        for (const playerName of Object.keys(this.guideViews)) {
            const player = this.plugin.server.getPlayer(playerName);
            if (player) {
                player.closeInventory();
            }
        }
    }
    onInventoryClick(listener, event) {
        const human = event.getWhoClicked();
        const humanName = human.getName();
        const view = this.guideViews[humanName];
        if (view) {
            const slot = event.getRawSlot();
            if (slot < 54) {
                event.setCancelled(true);
                if (!Player_js_1.default.$isInstance(human))
                    return;
                switch (slot) {
                    case 48: {
                        if (view.getParent) {
                            this.guideViews[humanName] = view.getParent();
                            this.updateView(human);
                        }
                        else {
                            this.sendViewPress(human, view, slot);
                        }
                        break;
                    }
                    case 49: {
                        human.closeInventory();
                        break;
                    }
                    default: {
                        this.sendViewPress(human, view, slot);
                    }
                }
                return;
            }
            const action = event.getAction();
            if (action === InventoryAction_js_1.default.COLLECT_TO_CURSOR
                || action === InventoryAction_js_1.default.HOTBAR_SWAP
                || action === InventoryAction_js_1.default.HOTBAR_MOVE_AND_READD
                || action === InventoryAction_js_1.default.MOVE_TO_OTHER_INVENTORY) {
                event.setCancelled(true);
            }
        }
    }
    onInventoryClose(listener, event) {
        const player = event.getPlayer();
        const playerName = player.getName();
        if (this.guideViews[playerName]) {
            if (this.expectingClose[playerName]) {
                delete this.expectingClose[playerName];
            }
            else {
                delete this.guideViews[playerName];
            }
        }
    }
    onGuideCmd(sender) {
        if (Player_js_1.default.$isInstance(sender)) {
            const senderName = sender.getName();
            this.guideViews[senderName] = new DefaultPage_js_1.default(this, sender);
            this.updateView(sender);
            return true;
        }
        sender.sendMessage(this.colorText('&cThis command can only be ran by players'));
        return false;
    }
    updateView(player) {
        const playerName = player.getName();
        if (this.guideViews[playerName]) {
            const guideInv = this.createInventoryFromView(this.guideViews[playerName]);
            // const currentInvView = player.getOpenInventory()
            this.expectingClose[playerName] = true;
            player.openInventory(guideInv);
        }
    }
    createInventoryFromView(view) {
        const inv = Bukkit_js_1.default.createInventory(null, 54, view.name);
        for (let i = 0; i < 54; i += 1) {
            inv.setItem(i, this.icons.null);
        }
        for (const subview of view.getSubviews()) {
            const [x, y, w, h] = subview.xywh;
            const area = w * h;
            for (let i = 0; i < area; i += 1) {
                const dx = i % w;
                const dy = Math.floor(i / w);
                const slot = (y + dy) * 9 + x + dx;
                if (subview.items[i]) {
                    inv.setItem(slot, subview.items[i]);
                }
                else {
                    inv.setItem(slot, new ItemStack_js_1.default(Material_js_1.default.AIR));
                }
            }
        }
        if (view.getParent) {
            inv.setItem(48, this.icons.back(view.getParent().name));
        }
        inv.setItem(49, this.icons.close);
        return inv;
    }
    sendViewPress(player, view, slot) {
        const subviews = view.getSubviews();
        const slotX = slot % 9;
        const slotY = Math.floor(slot / 9);
        for (const subview of subviews) {
            const [x, y, w, h] = subview.xywh;
            const dx = slotX - x;
            const dy = slotY - y;
            if (0 <= dx && dx < w
                && 0 <= dy && dy < h) {
                const index = dy * w + dx;
                const newView = view.onSelect(subview.id, index);
                if (newView) {
                    this.guideViews[player.getName()] = newView;
                    this.updateView(player);
                }
                break;
            }
        }
    }
};
__decorate([
    CommandManager_js_1.CommandHandler('guide')
], Guide.prototype, "onGuideCmd", null);
Guide = __decorate([
    CommandManager_js_1.CommandRegister,
    EventListener_js_1.Subscribe
], Guide);
exports.default = Guide;
