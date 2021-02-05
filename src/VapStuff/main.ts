import JsPlugin from '../lib/JsPlugin.js'
import ExtraRecipes from './ExtraRecipes.js'
import ShulkerPocket from './ShulkerPocket.js'
import UseableItems from './UseableItems.js'
import GrassPlanter from './GrassPlanter.js'
import SpawnerDisassembler from './SpawnerDisassembler.js'
import NoWitherGrief from './NoWitherGrief.js'
import Module from './Module.js'

export default class VapStuff extends JsPlugin {
  extraRecipes = new ExtraRecipes(this)

  useableItems = new UseableItems(this)
  shulkerPocket = new ShulkerPocket(this)
  grassPlanter = new GrassPlanter(this)
  spawnerDisassembler = new SpawnerDisassembler(this)
  noWitherGrief = new NoWitherGrief(this)

  modules: Module[] = [
    this.extraRecipes,
    this.useableItems,
    this.shulkerPocket,
    this.grassPlanter,
    this.spawnerDisassembler,
    this.noWitherGrief,
  ]

  onLoad () {
    console.log('[' + this.pluginName + '] Loaded')
  }

  onEnable () {
    this.modules.forEach(module => {
      module.onEnable()
    })

    console.log('[' + this.pluginName + '] Enabled')
  }

  onDisable () {
    this.modules.forEach(module => {
      module.onDisable()
    })

    console.log('[' + this.pluginName + '] Disabled')
  }
}
