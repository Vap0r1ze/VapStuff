import JsPlugin from '../lib/JsPlugin.js'
import ExtraRecipes from './modules/ExtraRecipes.js'
import ShulkerPocket from './modules/ShulkerPocket.js'
import UseableItems from './modules/UseableItems.js'
import GrassPlanter from './modules/GrassPlanter.js'
import SpawnerDisassembler from './modules/SpawnerDisassembler.js'
import NoWitherGrief from './modules/NoWitherGrief.js'
import Guide from './modules/Guide.js'
import Module from './types/Module.js'

export default class VapStuff extends JsPlugin {
  extraRecipes = new ExtraRecipes(this)

  useableItems = new UseableItems(this)

  shulkerPocket = new ShulkerPocket(this)

  grassPlanter = new GrassPlanter(this)

  spawnerDisassembler = new SpawnerDisassembler(this)

  noWitherGrief = new NoWitherGrief(this)

  guide = new Guide(this)

  modules: Module[] = [
    this.extraRecipes,
    this.useableItems,
    this.shulkerPocket,
    this.grassPlanter,
    this.spawnerDisassembler,
    this.noWitherGrief,
    this.guide,
  ]

  onLoad() {
    console.log(`[${this.pluginName}] Loaded`)
  }

  onEnable() {
    this.modules.forEach(module => {
      module.onEnable()
      this.log(`Module enabled: \xA7b${module.name}\xA7r`)
    })

    this.log('All modules enabled')
  }

  onDisable() {
    this.modules.slice().reverse().forEach(module => {
      module.onDisable()
      this.log(`Module disabled: \xA7b${module.name}\xA7r`)
    })

    this.log('All modules disabled')
  }

  log(message: string) {
    console.log(`\xA7a[${this.pluginName}]\xA7r ${message}`)
  }
}
