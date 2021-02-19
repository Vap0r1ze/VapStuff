import JsPlugin from '../lib/JsPlugin.js'
import ExtraRecipes from './modules/ExtraRecipes.js'
import ShulkerPocket from './modules/ShulkerPocket.js'
import UseableItems from './modules/UseableItems.js'
import GrassPlanter from './modules/GrassPlanter.js'
import NoWitherGrief from './modules/NoWitherGrief.js'
import Guide from './modules/Guide.js'
import Module from './types/Module.js'
import Hints from './modules/Hints.js'
import DBFactory from './modules/DBFactory.js'
import BlockAspects from './modules/BlockAspects.js'
import AntiCarter from './modules/AntiCarter.js'
import Player from '../lib/org/bukkit/entity/Player.js'

export default class VapStuff extends JsPlugin {
  dbFactory = new DBFactory(this)

  hints = new Hints(this)

  blockAspects = new BlockAspects(this)

  extraRecipes = new ExtraRecipes(this)

  // Level 2 - Modules
  useableItems = new UseableItems(this)

  shulkerPocket = new ShulkerPocket(this)

  grassPlanter = new GrassPlanter(this)

  noWitherGrief = new NoWitherGrief(this)

  antiCarter = new AntiCarter(this)

  // Level 3
  guide = new Guide(this)

  modules: Module[] = [
    this.dbFactory,
    this.hints,
    this.blockAspects,
    this.extraRecipes,
    this.useableItems,
    this.shulkerPocket,
    this.grassPlanter,
    this.noWitherGrief,
    this.antiCarter,
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

  getPlayer(uuid: UUID): Player | null {
    const players = Array.from(this.server.getOnlinePlayers())
    return players.find(player => player.getUniqueId().toString() === uuid)
  }
}
