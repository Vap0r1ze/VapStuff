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
let GrassPlanter = class GrassPlanter extends Module {
    get name() { return 'Grass Planter'; }
    onPlayerInteract(listener, event) {
        const player = event.getPlayer();
        const inv = player.getInventory();
        const itemInMainHand = inv.getItemInMainHand();
        if (event.getAction() === Action.RIGHT_CLICK_BLOCK
            && itemInMainHand != null
            && itemInMainHand.getType() === Material.WHEAT_SEEDS) {
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
};
GrassPlanter = __decorate([
    Subscribe
], GrassPlanter);
export default GrassPlanter;
