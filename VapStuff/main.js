"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JsPlugin_js_1 = require("../lib/JsPlugin.js");
const ExtraRecipes_js_1 = require("./modules/ExtraRecipes.js");
const ShulkerPocket_js_1 = require("./modules/ShulkerPocket.js");
const UseableItems_js_1 = require("./modules/UseableItems.js");
const GrassPlanter_js_1 = require("./modules/GrassPlanter.js");
const NoWitherGrief_js_1 = require("./modules/NoWitherGrief.js");
const Guide_js_1 = require("./modules/Guide.js");
const Hints_js_1 = require("./modules/Hints.js");
class VapStuff extends JsPlugin_js_1.default {
    constructor() {
        super(...arguments);
        // Level 0
        this.hints = new Hints_js_1.default(this);
        // Level 1
        this.extraRecipes = new ExtraRecipes_js_1.default(this);
        // Level 2 - Modules
        this.useableItems = new UseableItems_js_1.default(this);
        this.shulkerPocket = new ShulkerPocket_js_1.default(this);
        this.grassPlanter = new GrassPlanter_js_1.default(this);
        this.noWitherGrief = new NoWitherGrief_js_1.default(this);
        // Level 3
        this.guide = new Guide_js_1.default(this);
        this.modules = [
            this.hints,
            this.extraRecipes,
            this.useableItems,
            this.shulkerPocket,
            this.grassPlanter,
            this.noWitherGrief,
            this.guide,
        ];
    }
    onLoad() {
        console.log(`[${this.pluginName}] Loaded`);
    }
    onEnable() {
        this.modules.forEach(module => {
            module.onEnable();
            this.log(`Module enabled: \xA7b${module.name}\xA7r`);
        });
        this.log('All modules enabled');
    }
    onDisable() {
        this.modules.slice().reverse().forEach(module => {
            module.onDisable();
            this.log(`Module disabled: \xA7b${module.name}\xA7r`);
        });
        this.log('All modules disabled');
    }
    log(message) {
        console.log(`\xA7a[${this.pluginName}]\xA7r ${message}`);
    }
}
exports.default = VapStuff;
