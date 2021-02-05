import PlayerDropItemEvent from '../lib/org/bukkit/event/player/PlayerDropItemEvent.js';
import Module from './Module.js';
export default class ExtraRecipes extends Module {
    constructor() {
        super(...arguments);
        this.TRACKED_MATERIALS = [];
        this.RECIPES = {};
        this.trackedDrops = {};
    }
    // API
    addRecipe(id, recipe) {
        const exists = id in this.RECIPES;
        this.RECIPES[id] = recipe;
        this.initializeTracked();
        return !exists;
    }
    removeRecipe(id) {
        const exists = id in this.RECIPES;
        if (exists) {
            delete this.RECIPES[id];
            this.initializeTracked();
        }
        return exists;
    }
    // Hooks
    onEnable() {
        const scheduler = this.plugin.server.getScheduler();
        this.scheduleTaskId = scheduler
            .scheduleSyncRepeatingTask(this.plugin.context.getJavaPlugin(), this.scheduleTask.bind(this), 0, 20);
        this.initializeTracked();
        this.plugin.registerEvent(PlayerDropItemEvent, this.onPlayerDropItem.bind(this));
    }
    onDisable() {
        const scheduler = this.plugin.server.getScheduler();
        if (this.scheduleTaskId) {
            scheduler.cancelTask(this.scheduleTaskId);
        }
    }
    onPlayerDropItem(listener, event) {
        const drop = event.getItemDrop();
        if (this.TRACKED_MATERIALS.includes(drop.getItemStack().getType())) {
            const loc = this.serializeLocation(drop.getLocation());
            if (!this.trackedDrops[loc])
                this.trackedDrops[loc] = [];
            this.trackedDrops[loc].push(drop);
        }
    }
    // Internal
    initializeTracked() {
        this.TRACKED_MATERIALS.splice(0, this.TRACKED_MATERIALS.length);
        for (const recipe of Object.values(this.RECIPES)) {
            for (const ingr of recipe.ingredients) {
                if (!this.TRACKED_MATERIALS.includes(ingr[0])) {
                    this.TRACKED_MATERIALS.push(ingr[0]);
                }
            }
            if (!recipe.advancedIngredients)
                continue;
            for (const ingr of recipe.advancedIngredients) {
                if (!this.TRACKED_MATERIALS.includes(ingr[0])) {
                    this.TRACKED_MATERIALS.push(ingr[0]);
                }
            }
        }
    }
    scheduleTask() {
        var _a;
        this.trackItems();
        const required = {};
        for (const [recipeName, recipe] of Object.entries(this.RECIPES)) {
            required[recipeName] = {
                ingr: Array(recipe.ingredients.length).fill(null),
                advIngr: Array(((_a = recipe.advancedIngredients) === null || _a === void 0 ? void 0 : _a.length) || 0).fill(null),
            };
        }
        for (const drops of Object.values(this.trackedDrops)) {
            const where = drops[0].getLocation();
            const block = where.getBlock();
            for (const [recipeName, recipe] of Object.entries(this.RECIPES)) {
                if (recipe.checkWorkbench && !recipe.checkWorkbench(block)) {
                    continue;
                }
                for (const drop of drops) {
                    let index = recipe.ingredients.findIndex(e => {
                        return e[0] === drop.getItemStack().getType()
                            && e[1] <= drop.getItemStack().getAmount();
                    });
                    if (index > -1) {
                        required[recipeName].ingr[index] = drop;
                    }
                    if (recipe.advancedIngredients) {
                        index = recipe.advancedIngredients.findIndex(e => {
                            return e[0] === drop.getItemStack().getType()
                                && e[1](drop.getItemStack());
                        });
                        if (index > -1) {
                            required[recipeName].advIngr[index] = drop;
                        }
                    }
                }
                if (required[recipeName].ingr.every(Boolean) &&
                    required[recipeName].advIngr.every(Boolean)) {
                    for (let i = 0; i < required[recipeName].ingr.length; i++) {
                        const stack = required[recipeName].ingr[i].getItemStack();
                        stack.setAmount(Math.max(0, stack.getAmount() - recipe.ingredients[i][1]));
                    }
                    for (let i = 0; i < required[recipeName].advIngr.length; i++) {
                        const stack = required[recipeName].advIngr[i].getItemStack();
                        stack.setAmount(0);
                    }
                    const result = recipe.createResult();
                    where.getWorld().dropItem(where, result);
                    if (recipe.sound) {
                        where.getWorld().playSound(where, recipe.sound, 1, 1);
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
                for (let i = 0; i < this.trackedDrops[loc].length; i++) {
                    const drop = this.trackedDrops[loc][i];
                    const newLoc = this.serializeLocation(drop.getLocation());
                    if (newLoc !== loc) {
                        this.trackedDrops[loc].splice(i--, 1);
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
}
