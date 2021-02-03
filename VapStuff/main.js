import JsPlugin from '../lib/JsPlugin.js';
import ShulkerPocket from './ShulkerPocket.js';
import UseableItems from './UseableItems.js';
import GrassPlanter from './GrassPlanter.js';
export default class VapStuff extends JsPlugin {
    constructor() {
        super(...arguments);
        this.modules = [
            new UseableItems(this),
            new ShulkerPocket(this),
            new GrassPlanter(this),
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
