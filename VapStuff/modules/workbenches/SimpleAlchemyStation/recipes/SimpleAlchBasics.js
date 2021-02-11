"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemStack_js_1 = require("../../../../../lib/org/bukkit/inventory/ItemStack.js");
const Material_js_1 = require("../../../../../lib/org/bukkit/Material.js");
const Module_js_1 = require("../../../../types/Module.js");
const MinecraftData = require("minecraft-data");
class SimpleAlchBasics extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.WORKBENCH_ID = 'simpleAlch';
    }
    onEnable() {
        this.addSimpleRecipe('leather', [
            Material_js_1.default.BLAZE_POWDER,
            Material_js_1.default.ROTTEN_FLESH,
        ], Material_js_1.default.LEATHER);
        this.addSimpleRecipe('slimeball', [
            Material_js_1.default.WATER_BUCKET,
            [Material_js_1.default.KELP_PLANT, 4],
            [Material_js_1.default.LIME_DYE, 4],
        ], Material_js_1.default.SLIME_BALL);
        this.addSimpleRecipe('nameTag', [
            Material_js_1.default.LEAD,
            Material_js_1.default.SLIME_BALL,
            Material_js_1.default.WRITABLE_BOOK,
            Material_js_1.default.LEATHER,
        ], Material_js_1.default.NAME_TAG);
    }
    onDisable() {
        this.plugin.extraRecipes.removeRecipe(this.WORKBENCH_ID, 'nameTag');
    }
    addSimpleRecipe(id, ingredients, result, waterUsage = 1) {
        let amount = 1;
        let mat;
        if (Material_js_1.default.$isInstance(result)) {
            mat = result;
        }
        else {
            [mat, amount] = result;
        }
        this.plugin.extraRecipes.addRecipe(this.WORKBENCH_ID, 'nameTag', {
            name: MinecraftData('1.16.5').itemsByName[`${mat.getKey()}`.replace('minecraft:', '')].displayName,
            ingredients: ingredients.map(ingr => (Material_js_1.default.$isInstance(ingr) ? [ingr, 1] : ingr)),
            createResult: () => new ItemStack_js_1.default(mat, amount),
            waterUsage,
        });
    }
}
exports.default = SimpleAlchBasics;
