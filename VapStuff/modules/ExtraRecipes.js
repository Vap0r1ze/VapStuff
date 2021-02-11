"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sound_js_1 = require("../../lib/org/bukkit/Sound.js");
const EventListener_js_1 = require("../services/EventListener.js");
const Module_js_1 = require("../types/Module.js");
const SimpleAlchemyStation_js_1 = require("./workbenches/SimpleAlchemyStation/SimpleAlchemyStation.js");
let ExtraRecipes = class ExtraRecipes extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.trackedMaterials = [];
        this.workbenches = {};
        this.workbenchModules = [
            new SimpleAlchemyStation_js_1.default(this.plugin),
        ];
        this.trackedDrops = {};
    }
    get name() { return 'Extra Recipes'; }
    // API
    addWorkbench(workbenchId, workbench) {
        const exists = workbenchId in this.workbenches;
        this.workbenches[workbenchId] = workbench;
        this.initializeTracked();
        return !exists;
    }
    removeWorkbench(workbenchId) {
        const exists = workbenchId in this.workbenches;
        if (exists) {
            delete this.workbenches[workbenchId];
            this.initializeTracked();
        }
        return exists;
    }
    addRecipe(workbenchId, recipeId, recipe) {
        const workbench = this.workbenches[workbenchId];
        if (!workbench)
            return false;
        const exists = recipeId in workbench.recipes;
        workbench.recipes[recipeId] = recipe;
        this.initializeTracked();
        return !exists;
    }
    removeRecipe(workbenchId, recipeId) {
        const workbench = this.workbenches[workbenchId];
        if (!workbench)
            return false;
        const exists = recipeId in workbench.recipes;
        if (exists) {
            delete workbench.recipes[recipeId];
            this.initializeTracked();
        }
        return exists;
    }
    // Hooks
    onEnable() {
        this.scheduleTaskId = this.runTaskRepeat(this.scheduleTask.bind(this), 0, 20);
        for (const workbenchModule of this.workbenchModules) {
            workbenchModule.onEnable();
        }
        this.initializeTracked();
    }
    onDisable() {
        if (this.scheduleTaskId) {
            this.cancelTask(this.scheduleTaskId);
        }
        for (const workbenchModule of this.workbenchModules) {
            workbenchModule.onDisable();
        }
    }
    onPlayerDropItem(listener, event) {
        const drop = event.getItemDrop();
        if (this.trackedMaterials.includes(drop.getItemStack().getType())) {
            const loc = this.serializeLocation(drop.getLocation());
            if (!this.trackedDrops[loc])
                this.trackedDrops[loc] = [];
            this.trackedDrops[loc].push(drop);
        }
    }
    // Internal
    initializeTracked() {
        this.trackedMaterials.splice(0, this.trackedMaterials.length);
        for (const workbench of Object.values(this.workbenches)) {
            for (const recipe of Object.values(workbench.recipes)) {
                for (const ingr of recipe.ingredients) {
                    if (!this.trackedMaterials.includes(ingr[0])) {
                        this.trackedMaterials.push(ingr[0]);
                    }
                }
                if (!recipe.advancedIngredients)
                    continue;
                for (const ingr of recipe.advancedIngredients) {
                    if (!this.trackedMaterials.includes(ingr[0])) {
                        this.trackedMaterials.push(ingr[0]);
                    }
                }
            }
        }
    }
    scheduleTask() {
        var _a;
        this.trackItems();
        const required = {};
        for (const [workbenchId, workbench] of Object.entries(this.workbenches)) {
            required[workbenchId] = {};
            for (const [recipeId, recipe] of Object.entries(workbench.recipes)) {
                required[workbenchId][recipeId] = {
                    ingr: Array(recipe.ingredients.length).fill(null),
                    advIngr: Array(((_a = recipe.advancedIngredients) === null || _a === void 0 ? void 0 : _a.length) || 0).fill(null),
                };
            }
        }
        for (const drops of Object.values(this.trackedDrops)) {
            const where = drops[0].getLocation();
            const block = where.getBlock();
            for (const [workbenchId, workbench] of Object.entries(this.workbenches)) {
                for (const [recipeId, recipe] of Object.entries(workbench.recipes)) {
                    for (const drop of drops) {
                        let index = recipe.ingredients.findIndex(e => e[0] === drop.getItemStack().getType()
                            && e[1] <= drop.getItemStack().getAmount());
                        if (index > -1) {
                            required[workbenchId][recipeId].ingr[index] = drop;
                        }
                        if (recipe.advancedIngredients) {
                            index = recipe.advancedIngredients
                                .findIndex(e => e[0] === drop.getItemStack().getType() && e[1](drop.getItemStack()));
                            if (index > -1) {
                                required[workbenchId][recipeId].advIngr[index] = drop;
                            }
                        }
                    }
                    if (required[workbenchId][recipeId].ingr.every(Boolean)
                        && required[workbenchId][recipeId].advIngr.every(Boolean)) {
                        if (!workbench.checkWorkbench(block, recipe)) {
                            continue;
                        }
                        for (let i = 0; i < required[workbenchId][recipeId].ingr.length; i += 1) {
                            const stack = required[workbenchId][recipeId].ingr[i].getItemStack();
                            stack.setAmount(Math.max(0, stack.getAmount() - recipe.ingredients[i][1]));
                        }
                        for (let i = 0; i < required[workbenchId][recipeId].advIngr.length; i += 1) {
                            const stack = required[workbenchId][recipeId].advIngr[i].getItemStack();
                            stack.setAmount(0);
                        }
                        const result = recipe.createResult();
                        if (workbench.naturalDrop) {
                            where.getWorld().dropItemNaturally(where, result);
                        }
                        else {
                            where.getWorld().dropItem(where, result);
                        }
                        if (workbench.sound) {
                            if (Sound_js_1.default.$isInstance(workbench.sound)) {
                                where.getWorld().playSound(where, workbench.sound, 1, 1);
                            }
                            else {
                                workbench.sound.forEach(sound => { where.getWorld().playSound(where, sound, 1, 1); });
                            }
                        }
                        if (recipe.sound) {
                            if (Sound_js_1.default.$isInstance(recipe.sound)) {
                                where.getWorld().playSound(where, recipe.sound, 1, 1);
                            }
                            else {
                                recipe.sound.forEach(sound => { where.getWorld().playSound(where, sound, 1, 1); });
                            }
                        }
                        if (workbench.postRecipe) {
                            workbench.postRecipe(where, recipe);
                        }
                        if (recipe.postRecipe) {
                            recipe.postRecipe(where);
                        }
                    }
                }
            }
        }
    }
    trackItems() {
        for (const [loc, drops] of Object.entries(this.trackedDrops)) {
            this.trackedDrops[loc] = drops.filter(drop => !drop.isDead());
            if (this.trackedDrops[loc].length === 0) {
                delete this.trackedDrops[loc];
            }
            else {
                for (let i = 0; i < this.trackedDrops[loc].length; i += 1) {
                    const drop = this.trackedDrops[loc][i];
                    const newLoc = this.serializeLocation(drop.getLocation());
                    if (newLoc !== loc) {
                        this.trackedDrops[loc].splice(i, 1);
                        i -= 1;
                        if (!this.trackedDrops[newLoc])
                            this.trackedDrops[newLoc] = [];
                        this.trackedDrops[newLoc].push(drop);
                    }
                }
                if (this.trackedDrops[loc].length === 0) {
                    delete this.trackedDrops[loc];
                }
            }
        }
    }
    serializeLocation(loc) {
        return `${loc.getWorld().getName()}[${loc.getBlockX()},${loc.getBlockY()},${loc.getBlockZ()}]`;
    }
};
ExtraRecipes = __decorate([
    EventListener_js_1.Subscribe
], ExtraRecipes);
exports.default = ExtraRecipes;
