import Action from '../../lib/org/bukkit/event/block/Action.js'
import InventoryCloseEvent from '../../lib/org/bukkit/event/inventory/InventoryCloseEvent.js'
import PlayerInteractEvent from '../../lib/org/bukkit/event/player/PlayerInteractEvent.js'
import Material from '../../lib/org/bukkit/Material.js'
import Sound from '../../lib/org/bukkit/Sound.js'
import { Subscribe } from '../services/EventListener.js'
import Module from '../types/Module.js'

@Subscribe
export default class UseableItems extends Module {
  get name() { return 'Useable Items' }

  private enderChestOpen: Record<UUID, boolean> = {}

  onPlayerInteract(listener: any, event: PlayerInteractEvent) {
    const player = event.getPlayer()
    const item = event.getItem()
    const action = event.getAction()
    if (!item) return
    if (action !== Action.RIGHT_CLICK_AIR && this.isLeftClick(action)) return
    switch (item.getType()) {
      case Material.CRAFTING_TABLE: {
        player.openWorkbench(null, true)
        break
      }
      case Material.ENDER_CHEST: {
        if (!this.enderChestOpen[player.getUniqueId()]) {
          player
            .getWorld()
            .playSound(player.getLocation(), Sound.BLOCK_ENDER_CHEST_OPEN, 1, 1)
        }
        this.enderChestOpen[player.getUniqueId()] = true
        const echest = player.getEnderChest()
        player.openInventory(echest)
        break
      }
      default:
        break
    }
  }

  onInventoryClose(listener: any, event: InventoryCloseEvent) {
    const player = event.getPlayer()
    if (this.enderChestOpen[player.getUniqueId()]) {
      delete this.enderChestOpen[player.getUniqueId()]
      player
        .getWorld()
        .playSound(player.getLocation(), Sound.BLOCK_ENDER_CHEST_CLOSE, 1, 1)
    }
  }

  private isLeftClick(action: Action) {
    return action === Action.LEFT_CLICK_BLOCK || action === Action.LEFT_CLICK_AIR
  }
}
