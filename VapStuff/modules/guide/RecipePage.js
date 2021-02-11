"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemBuilder_js_1 = require("../../../lib/com/smc/utils/ItemBuilder.js");
const Material_js_1 = require("../../../lib/org/bukkit/Material.js");
const GuideSection_js_1 = require("../../types/GuideSection.js");
const util_js_1 = require("../../util.js");
const DefaultPage_js_1 = require("./DefaultPage.js");
class RecipePage extends GuideSection_js_1.GuideBase {
    constructor() {
        super(...arguments);
        this.pageNumber = 0;
        this.selectedWorkbench = null;
        this.selectedRecipe = null;
    }
    get name() {
        const { extraRecipes } = this.context.plugin;
        if (!this.selectedWorkbench) {
            return 'Recipes';
        }
        const workbench = extraRecipes.workbenches[this.selectedWorkbench];
        if (!this.selectedRecipe) {
            return workbench.name;
        }
        const recipe = workbench.recipes[this.selectedRecipe];
        return recipe.name;
    }
    getParent() {
        if (!this.selectedWorkbench) {
            return new DefaultPage_js_1.default(this.context, this.player);
        }
        const page = new RecipePage(this.context, this.player);
        if (!this.selectedRecipe) {
            return page;
        }
        page.selectedWorkbench = this.selectedWorkbench;
        return page;
    }
    getSubviews() {
        const { extraRecipes } = this.context.plugin;
        if (!this.selectedWorkbench) {
            const workbenchesView = {
                id: 'workbenches',
                items: [],
                xywh: [2, 2, 5, 2],
            };
            for (const workbench of Object.values(extraRecipes.workbenches)) {
                const icon = new ItemBuilder_js_1.default(workbench.icon)
                    .setLore(workbench.description.split('\n'))
                    .build();
                workbenchesView.items.push(icon);
            }
            return [workbenchesView];
        }
        const workbench = extraRecipes.workbenches[this.selectedWorkbench];
        if (!this.selectedRecipe) {
            const recipesView = {
                id: 'recipes',
                items: [],
                xywh: [2, 2, 5, 2],
            };
            for (const recipe of Object.values(workbench.recipes)) {
                const iconBuilder = new ItemBuilder_js_1.default(recipe.createResult(1 /* GUIDE_LIST */));
                const icon = iconBuilder
                    .setLore([
                    ...iconBuilder.getLore(),
                    '',
                    util_js_1.colorText('&eClick to view recipe!'),
                ])
                    .build();
                recipesView.items.push(icon);
            }
            const workbenchHeader = {
                id: 'workbenchHeader',
                items: [
                    this.getWorkbenchIcon(workbench, true),
                ],
                xywh: [4, 0, 1, 1],
            };
            return [recipesView, workbenchHeader];
        }
        const recipeView = workbench.getSubview(this, this.selectedRecipe);
        return [recipeView];
    }
    getButton() {
        return new ItemBuilder_js_1.default(Material_js_1.default.BOOK)
            .setDisplayName(this.context.colorText('&aRecipe Book'))
            .setLore(this.context.colorText('\n&eClick to view!').split('\n'))
            .build();
    }
    onSelect(subviewId, index) {
        const { extraRecipes } = this.context.plugin;
        switch (subviewId) {
            case 'workbenches': {
                const workbenchId = Object.keys(extraRecipes.workbenches)[index];
                if (workbenchId) {
                    this.pageNumber = 0;
                    this.selectedWorkbench = workbenchId;
                    return this;
                }
                break;
            }
            case 'recipes': {
                const workbench = extraRecipes.workbenches[this.selectedWorkbench];
                const recipeId = Object.keys(workbench.recipes)[index];
                if (recipeId) {
                    this.pageNumber = 0;
                    this.selectedRecipe = recipeId;
                    return this;
                }
                break;
            }
            default: {
                break;
            }
        }
        return null;
    }
    getWorkbenchIcon(workbench, inList = false) {
        const declension = inList ? 'these recipes' : 'this recipe';
        const workbenchName = workbench.name.toLowerCase();
        // const workbenchName = workbench.icon.getItemMeta().getDisplayName()
        return new ItemBuilder_js_1.default(workbench.icon.clone())
            .setLore(util_js_1.colorText(`&7Craft ${declension} by using\n&7a ${workbenchName}!`).split('\n'))
            .build();
    }
}
exports.default = RecipePage;
