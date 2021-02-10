"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemBuilder_js_1 = require("../../../lib/com/smc/utils/ItemBuilder.js");
const ItemStack_js_1 = require("../../../lib/org/bukkit/inventory/ItemStack.js");
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
        this.recipeData = {
            simpleAlch: {
                name: 'Simple Alchemy Station',
                icon: new ItemBuilder_js_1.default(Material_js_1.default.CAULDRON)
                    .setDisplayName(util_js_1.colorText('&fSimple Alchemy Station'))
                    .build(),
                description: util_js_1.colorText('&7View all of the &bSimple Infusion\n&7recipes!'),
                recipes: {
                    spawnerDisassembler: {
                        name: 'Spawner Disassembler',
                        ingredients: [
                            new ItemStack_js_1.default(Material_js_1.default.NETHERITE_PICKAXE),
                            ...this.context.plugin.extraRecipes.recipes.spawnerDisassembler.ingredients
                                .map(ingr => new ItemStack_js_1.default(ingr[0], ingr[1])),
                        ],
                        result: new ItemBuilder_js_1.default(this.context.plugin.extraRecipes.recipes.spawnerDisassembler.createResult())
                            .setLore((util_js_1.colorText(this.context.plugin.spawnerDisassembler.INFO)).split('\n'))
                            .build(),
                    },
                    nameTag: {
                        name: 'Name Tag',
                        ingredients: [
                            new ItemStack_js_1.default(Material_js_1.default.LEAD),
                            new ItemStack_js_1.default(Material_js_1.default.SLIME_BALL),
                            new ItemStack_js_1.default(Material_js_1.default.WRITABLE_BOOK),
                            new ItemStack_js_1.default(Material_js_1.default.LEATHER),
                        ],
                        result: new ItemStack_js_1.default(Material_js_1.default.NAME_TAG),
                    },
                },
                getSubview(data, recipeId) {
                    const nullIcon = this.context.icons.null;
                    const { ingredients, result } = data.recipes[recipeId];
                    const workbenchIcon = this.getWorkbenchIcon(data);
                    const subview = {
                        id: 'recipe',
                        items: [],
                        xywh: [1, 1, 7, 3],
                    };
                    for (let i = 0; i < 12; i += 1) {
                        const x = 3 + (i % 4);
                        const y = Math.floor(i / 4);
                        subview.items[y * 7 + x] = nullIcon;
                    }
                    for (let i = 0; i < Math.min(9, ingredients.length); i += 1) {
                        const x = i % 3;
                        const y = Math.floor(i / 3);
                        subview.items[y * 7 + x] = ingredients[i];
                    }
                    subview.items[11] = workbenchIcon;
                    subview.items[13] = result;
                    return subview;
                },
            },
        };
        this.getParent = () => {
            if (!this.selectedWorkbench) {
                return new DefaultPage_js_1.default(this.context, this.player);
            }
            const page = new RecipePage(this.context, this.player);
            if (!this.selectedRecipe) {
                return page;
            }
            page.selectedWorkbench = this.selectedWorkbench;
            return page;
        };
    }
    get name() {
        if (!this.selectedWorkbench) {
            return 'Recipes';
        }
        const workbench = this.recipeData[this.selectedWorkbench];
        if (!this.selectedRecipe) {
            return workbench.name;
        }
        const recipe = workbench.recipes[this.selectedRecipe];
        return recipe.name;
    }
    getSubviews() {
        if (!this.selectedWorkbench) {
            const workbenchesView = {
                id: 'workbenches',
                items: [],
                xywh: [1, 1, 7, 3],
            };
            for (const [, workbenchData] of Object.entries(this.recipeData)) {
                const icon = new ItemBuilder_js_1.default(workbenchData.icon)
                    .setLore(workbenchData.description.split('\n'))
                    .build();
                workbenchesView.items.push(icon);
            }
            return [workbenchesView];
        }
        const workbench = this.recipeData[this.selectedWorkbench];
        if (!this.selectedRecipe) {
            const recipesView = {
                id: 'recipes',
                items: [],
                xywh: [1, 1, 7, 3],
            };
            for (const [, recipeData] of Object.entries(workbench.recipes)) {
                const iconBuilder = new ItemBuilder_js_1.default(recipeData.result.clone());
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
        const recipeView = workbench.getSubview.call(this, workbench, this.selectedRecipe);
        return [recipeView];
    }
    getButton() {
        return new ItemBuilder_js_1.default(Material_js_1.default.BOOK)
            .setDisplayName(this.context.colorText('&aRecipe Book'))
            .setLore(this.context.colorText('\n&eClick to view!').split('\n'))
            .build();
    }
    onSelect(subviewId, index) {
        switch (subviewId) {
            case 'workbenches': {
                const workbenchId = Object.keys(this.recipeData)[index];
                if (workbenchId) {
                    this.pageNumber = 0;
                    this.selectedWorkbench = workbenchId;
                    return this;
                }
                break;
            }
            case 'recipes': {
                const workbench = this.recipeData[this.selectedWorkbench];
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
    getWorkbenchIcon(workbenchData, inList = false) {
        const declension = inList ? 'these recipes' : 'this recipe';
        const workbenchName = workbenchData.name.toLowerCase();
        // const workbenchName = workbenchData.icon.getItemMeta().getDisplayName()
        return new ItemBuilder_js_1.default(workbenchData.icon.clone())
            .setLore(util_js_1.colorText(`&7Craft ${declension} by using\n&7a ${workbenchName}!`).split('\n'))
            .build();
    }
}
exports.default = RecipePage;
