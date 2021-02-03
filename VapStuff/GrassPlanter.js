import Action from '../lib/org/bukkit/event/block/Action.js';
import Material from '../lib/org/bukkit/Material.js';
import Sound from '../lib/org/bukkit/Sound.js';
export default class GrassPlanter {
    onPlayerInteract(listener, event) {
        let itemInMainHand;
        let player;
        if (event.getAction() === Action.RIGHT_CLICK_BLOCK &&
            (itemInMainHand = (player = event.getPlayer()).getInventory().getItemInMainHand()) !=
                null &&
            itemInMainHand.getType() === Material.WHEAT_SEEDS) {
            const seedCount = itemInMainHand.getAmount();
            if (seedCount < 3)
                return;
            const block = event.getClickedBlock();
            if (block.getType() !== Material.DIRT)
                return;
            block.setType(Material.GRASS_BLOCK);
            player.getWorld().playSound(block.getLocation(), Sound.BLOCK_GRASS_PLACE, 1, 1);
            itemInMainHand.setAmount(Math.max(0, seedCount - 3));
            event.setCancelled(true);
        }
    }
}
