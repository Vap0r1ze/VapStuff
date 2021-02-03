import Player from '../lib/org/bukkit/entity/Player.js'
import Action from '../lib/org/bukkit/event/block/Action.js'
import PlayerInteractEvent from '../lib/org/bukkit/event/player/PlayerInteractEvent.js'
import ItemStack from '../lib/org/bukkit/inventory/ItemStack.js'
import PlayerInventory from '../lib/org/bukkit/inventory/PlayerInventory.js'
import Material from '../lib/org/bukkit/Material.js'
import Sound from '../lib/org/bukkit/Sound.js'
import Module from './Module.js'

export default class GrassPlanter extends Module {
  onEnable () {
    this.plugin.registerEvent(PlayerInteractEvent, this.onPlayerInteract.bind(this))
  }

  onPlayerInteract (listener: any, event: PlayerInteractEvent) {
    let itemInMainHand: ItemStack
    let player: Player
    if (
      event.getAction() === Action.RIGHT_CLICK_BLOCK &&
      (itemInMainHand = ((player = event.getPlayer()).getInventory() as PlayerInventory).getItemInMainHand()) !=
        null &&
      itemInMainHand.getType() === Material.WHEAT_SEEDS
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
