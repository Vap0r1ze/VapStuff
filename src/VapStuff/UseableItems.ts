import Action from '../lib/org/bukkit/event/block/Action.js'
import PlayerInteractEvent from '../lib/org/bukkit/event/player/PlayerInteractEvent.js'
import Material from '../lib/org/bukkit/Material.js'
import Sound from '../lib/org/bukkit/Sound.js'

export default class UseableItems {
  onPlayerInteract (listener: any, event: PlayerInteractEvent) {
    const player = event.getPlayer()
    const item = event.getItem()
    const action = event.getAction()
    if (!item) return
    if (action !== Action.RIGHT_CLICK_AIR) return
    switch (item.getType()) {
      case Material.CRAFTING_TABLE: {
        player.openWorkbench(null, true)
        break
      }
      case Material.ENDER_CHEST: {
        const echest = player.getEnderChest()
        player.openInventory(echest)
        player
          .getWorld()
          .playSound(player.getLocation(), Sound.BLOCK_ENDER_CHEST_OPEN, 1, 1)
        break
      }
    }
  }
}
