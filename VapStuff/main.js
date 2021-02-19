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
const DBFactory_js_1 = require("./modules/DBFactory.js");
const BlockAspects_js_1 = require("./modules/BlockAspects.js");
const AntiCarter_js_1 = require("./modules/AntiCarter.js");
class VapStuff extends JsPlugin_js_1.default {
    constructor() {
        super(...arguments);
        this.dbFactory = new DBFactory_js_1.default(this);
        this.hints = new Hints_js_1.default(this);
        this.blockAspects = new BlockAspects_js_1.default(this);
        this.extraRecipes = new ExtraRecipes_js_1.default(this);
        // Level 2 - Modules
        this.useableItems = new UseableItems_js_1.default(this);
        this.shulkerPocket = new ShulkerPocket_js_1.default(this);
        this.grassPlanter = new GrassPlanter_js_1.default(this);
        this.noWitherGrief = new NoWitherGrief_js_1.default(this);
        this.antiCarter = new AntiCarter_js_1.default(this);
        // Level 3
        this.guide = new Guide_js_1.default(this);
        this.modules = [
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
    getPlayer(uuid) {
        const players = Array.from(this.server.getOnlinePlayers());
        return players.find(player => player.getUniqueId().toString() === uuid);
    }
}
exports.default = VapStuff;
