import JsPlugin from '../lib/JsPlugin.js';
import ExtraRecipes from './ExtraRecipes.js';
import ShulkerPocket from './ShulkerPocket.js';
import UseableItems from './UseableItems.js';
import GrassPlanter from './GrassPlanter.js';
import SpawnerDisassembler from './SpawnerDisassembler.js';
import NoWitherGrief from './NoWitherGrief.js';
export default class VapStuff extends JsPlugin {
    constructor() {
        super(...arguments);
        this.extraRecipes = new ExtraRecipes(this);
        this.useableItems = new UseableItems(this);
        this.shulkerPocket = new ShulkerPocket(this);
        this.grassPlanter = new GrassPlanter(this);
        this.spawnerDisassembler = new SpawnerDisassembler(this);
        this.noWitherGrief = new NoWitherGrief(this);
        this.modules = [
            this.extraRecipes,
            this.useableItems,
            this.shulkerPocket,
            this.grassPlanter,
            this.spawnerDisassembler,
            this.noWitherGrief,
        ];
    }
    onLoad() {
        console.log('[' + this.pluginName + '] Loaded');
    }
    onEnable() {
        this.modules.forEach(module => {
            module.onEnable();
        });
        console.log('[' + this.pluginName + '] Enabled');
    }
    onDisable() {
        this.modules.forEach(module => {
            module.onDisable();
        });
        console.log('[' + this.pluginName + '] Disabled');
    }
}
