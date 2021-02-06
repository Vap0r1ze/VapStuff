var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Action from '../lib/org/bukkit/event/block/Action.js';
import Material from '../lib/org/bukkit/Material.js';
import Sound from '../lib/org/bukkit/Sound.js';
import { Subscribe } from './EventListener.js';
import Module from './Module.js';
let UseableItems = class UseableItems extends Module {
    constructor() {
        super(...arguments);
        this.enderChestOpen = {};
    }
    get name() { return 'Useable Items'; }
    onPlayerInteract(listener, event) {
        const player = event.getPlayer();
        const item = event.getItem();
        const action = event.getAction();
        if (!item)
            return;
        if (action !== Action.RIGHT_CLICK_AIR)
            return;
        switch (item.getType()) {
            case Material.CRAFTING_TABLE: {
                player.openWorkbench(null, true);
                break;
            }
            case Material.ENDER_CHEST: {
                if (!this.enderChestOpen[player.getUniqueId()]) {
                    player
                        .getWorld()
                        .playSound(player.getLocation(), Sound.BLOCK_ENDER_CHEST_OPEN, 1, 1);
                }
                this.enderChestOpen[player.getUniqueId()] = true;
                const echest = player.getEnderChest();
                player.openInventory(echest);
                break;
            }
            default:
                break;
        }
    }
    onInventoryClose(listener, event) {
        const player = event.getPlayer();
        if (this.enderChestOpen[player.getUniqueId()]) {
            delete this.enderChestOpen[player.getUniqueId()];
            player
                .getWorld()
                .playSound(player.getLocation(), Sound.BLOCK_ENDER_CHEST_CLOSE, 1, 1);
        }
    }
};
UseableItems = __decorate([
    Subscribe
], UseableItems);
export default UseableItems;
