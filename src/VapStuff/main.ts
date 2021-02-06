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
      this.log(`Module enabled: \xA7b${module.name}\xA7r`)
    })

    this.log('All modules enabled')
  }

  onDisable () {
    this.modules.forEach(module => {
      module.onDisable()
      this.log(`Module disabled: \xA7b${module.name}\xA7r`)
    })

    this.log('All modules disabled')
  }

  log (message: string) {
    console.log(`\xA7a[${this.pluginName}]\xA7r ${message}`)
  }
}
