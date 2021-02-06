var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Subscribe } from './EventListener.js';
import Module from './Module.js';
let ExtraRecipes = class ExtraRecipes extends Module {
    constructor() {
        super(...arguments);
        this.trackedMaterials = [];
        this.recipes = {};
        this.trackedDrops = {};
    }
    get name() { return 'Extra Recipes'; }
    // API
    addRecipe(id, recipe) {
        const exists = id in this.recipes;
        this.recipes[id] = recipe;
        this.initializeTracked();
        return !exists;
    }
    removeRecipe(id) {
        const exists = id in this.recipes;
        if (exists) {
            delete this.recipes[id];
            this.initializeTracked();
        }
        return exists;
    }
    // Hooks
    onEnable() {
        this.scheduleTaskId = this.runTaskRepeat(this.scheduleTask.bind(this), 0, 20);
        this.initializeTracked();
    }
    onDisable() {
        if (this.scheduleTaskId) {
            this.cancelTask(this.scheduleTaskId);
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
        for (const recipe of Object.values(this.recipes)) {
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
    scheduleTask() {
        var _a;
        this.trackItems();
        const required = {};
        for (const [recipeName, recipe] of Object.entries(this.recipes)) {
            required[recipeName] = {
                ingr: Array(recipe.ingredients.length).fill(null),
                advIngr: Array(((_a = recipe.advancedIngredients) === null || _a === void 0 ? void 0 : _a.length) || 0).fill(null),
            };
        }
        for (const drops of Object.values(this.trackedDrops)) {
            const where = drops[0].getLocation();
            const block = where.getBlock();
            for (const [recipeName, recipe] of Object.entries(this.recipes)) {
                if (recipe.checkWorkbench && !recipe.checkWorkbench(block)) {
                    continue;
                }
                for (const drop of drops) {
                    let index = recipe.ingredients.findIndex(e => e[0] === drop.getItemStack().getType()
                        && e[1] <= drop.getItemStack().getAmount());
                    if (index > -1) {
                        required[recipeName].ingr[index] = drop;
                    }
                    if (recipe.advancedIngredients) {
                        index = recipe.advancedIngredients.findIndex(e => e[0] === drop.getItemStack().getType()
                            && e[1](drop.getItemStack()));
                        if (index > -1) {
                            required[recipeName].advIngr[index] = drop;
                        }
                    }
                }
                if (required[recipeName].ingr.every(Boolean)
                    && required[recipeName].advIngr.every(Boolean)) {
                    for (let i = 0; i < required[recipeName].ingr.length; i += 1) {
                        const stack = required[recipeName].ingr[i].getItemStack();
                        stack.setAmount(Math.max(0, stack.getAmount() - recipe.ingredients[i][1]));
                    }
                    for (let i = 0; i < required[recipeName].advIngr.length; i += 1) {
                        const stack = required[recipeName].advIngr[i].getItemStack();
                        stack.setAmount(0);
                    }
                    const result = recipe.createResult();
                    where.getWorld().dropItem(where, result);
                    if (recipe.sound) {
                        if (this.isSound(recipe.sound)) {
                            where.getWorld().playSound(where, recipe.sound, 1, 1);
                        }
                        else {
                            recipe.sound.forEach(sound => { where.getWorld().playSound(where, sound, 1, 1); });
                        }
                    }
                    if (recipe.postRecipe) {
                        recipe.postRecipe(where);
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
    Subscribe
], ExtraRecipes);
export default ExtraRecipes;
