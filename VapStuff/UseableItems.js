import Action from '../lib/org/bukkit/event/block/Action.js';
import InventoryCloseEvent from '../lib/org/bukkit/event/inventory/InventoryCloseEvent.js';
import PlayerInteractEvent from '../lib/org/bukkit/event/player/PlayerInteractEvent.js';
import Material from '../lib/org/bukkit/Material.js';
import Sound from '../lib/org/bukkit/Sound.js';
import Module from './Module.js';
export default class UseableItems extends Module {
    constructor() {
        super(...arguments);
        this.enderChestOpen = {};
    }
    onEnable() {
        this.plugin.registerEvent(PlayerInteractEvent, this.onPlayerInteract.bind(this));
        this.plugin.registerEvent(InventoryCloseEvent, this.onInventoryClose.bind(this));
    }
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
}
