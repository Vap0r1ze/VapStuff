import Action from '../lib/org/bukkit/event/block/Action.js'
import PlayerInteractEvent from '../lib/org/bukkit/event/player/PlayerInteractEvent.js'
import PlayerInventory from '../lib/org/bukkit/inventory/PlayerInventory.js'
import Material from '../lib/org/bukkit/Material.js'
import Sound from '../lib/org/bukkit/Sound.js'
import { Subscribe } from './EventListener.js'
import Module from './Module.js'

@Subscribe
export default class GrassPlanter extends Module {
  get name() { return 'Grass Planter' }

  onPlayerInteract(listener: any, event: PlayerInteractEvent) {
    const player = event.getPlayer()
    const inv = player.getInventory() as PlayerInventory
    const itemInMainHand = inv.getItemInMainHand()
    if (
      event.getAction() === Action.RIGHT_CLICK_BLOCK
      && itemInMainHand != null
      && itemInMainHand.getType() === Material.WHEAT_SEEDS
    ) {
      const seedCount = itemInMainHand.getAmount()
      if (seedCount < 3) return
      const block = event.getClickedBlock()
      if (block.getType() !== Material.DIRT) return
      block.setType(Material.GRASS_BLOCK)
      player.getWorld().playSound(block.getLocation(), Sound.BLOCK_GRASS_PLACE, 1, 1)
      itemInMainHand.setAmount(Math.max(0, seedCount - 3))
      event.setCancelled(true)
    }
  }
}
