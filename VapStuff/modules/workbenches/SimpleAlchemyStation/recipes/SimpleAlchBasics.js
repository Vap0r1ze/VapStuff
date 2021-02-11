"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemStack_js_1 = require("../../../../../lib/org/bukkit/inventory/ItemStack.js");
const Material_js_1 = require("../../../../../lib/org/bukkit/Material.js");
const Module_js_1 = require("../../../../types/Module.js");
class SimpleAlchBasics extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.WORKBENCH_ID = 'simpleAlch';
    }
    onEnable() {
        this.plugin.extraRecipes.addRecipe(this.WORKBENCH_ID, 'nameTag', {
            name: 'Name Tag',
            ingredients: [
                [Material_js_1.default.LEAD, 1],
                [Material_js_1.default.SLIME_BALL, 1],
                [Material_js_1.default.WRITABLE_BOOK, 1],
                [Material_js_1.default.LEATHER, 1],
            ],
            createResult: () => new ItemStack_js_1.default(Material_js_1.default.NAME_TAG),
            waterUsage: 1,
        });
    }
    onDisable() {
        this.plugin.extraRecipes.removeRecipe(this.WORKBENCH_ID, 'nameTag');
    }
}
exports.default = SimpleAlchBasics;
