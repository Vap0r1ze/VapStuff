import JsPlugin from '../lib/JsPlugin.js'
import PlayerInteractEvent from '../lib/org/bukkit/event/player/PlayerInteractEvent.js'
import ShulkerPocket from './ShulkerPocket.js'
import InventoryCloseEvent from '../lib/org/bukkit/event/inventory/InventoryCloseEvent.js'
import InventoryClickEvent from '../lib/org/bukkit/event/inventory/InventoryClickEvent.js'
import InventoryDragEvent from '../lib/org/bukkit/event/inventory/InventoryDragEvent.js'
import UseableItems from './UseableItems.js'
import GrassPlanter from './GrassPlanter.js'

export default class VapStuff extends JsPlugin {
  private shulkerPocket = new ShulkerPocket()
  private useableItems = new UseableItems()
  private grassPlanter = new GrassPlanter()

  onLoad () {
    console.log('[' + this.pluginName + '] Loaded')
  }

  onEnable () {
    // UseableItems
    this.registerEvent(PlayerInteractEvent, this.useableItems.onPlayerInteract.bind(this.useableItems))

    // ShulkerPocket
    this.registerEvent(PlayerInteractEvent, this.shulkerPocket.onPlayerInteract.bind(this.shulkerPocket))
    this.registerEvent(InventoryCloseEvent, this.shulkerPocket.onInventoryClose.bind(this.shulkerPocket))
    this.registerEvent(InventoryClickEvent, this.shulkerPocket.onInventoryClick.bind(this.shulkerPocket))
    this.registerEvent(InventoryDragEvent, this.shulkerPocket.onInventoryDrag.bind(this.shulkerPocket))

    // GrassPlanter
    this.registerEvent(PlayerInteractEvent, this.grassPlanter.onPlayerInteract.bind(this.grassPlanter))

    console.log('[' + this.pluginName + '] Enabled')
  }

  onDisable () {
    console.log('[' + this.pluginName + '] Disabled')
  }
}
