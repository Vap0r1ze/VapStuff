import CookingRecipe from './CookingRecipe.js';
import ItemStack from './ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import RecipeChoice from './RecipeChoice.js';
export default interface FurnaceRecipe extends CookingRecipe {
    getCookingTime(): number;
    getExperience(): number;
    getGroup(): string;
    getInput(): ItemStack;
    getInputChoice(): RecipeChoice;
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    setCookingTime(cookingTime: number): void;
    setExperience(experience: number): void;
    setGroup(group: string): void;
    setInput(input: Material): FurnaceRecipe;
    setInput(input: Material): CookingRecipe;
    setInput(input: MaterialData): FurnaceRecipe;
    setInput(input: Material, data: number): FurnaceRecipe;
    setInputChoice(input: RecipeChoice): CookingRecipe;
    setInputChoice(input: RecipeChoice): FurnaceRecipe;
}
export default class FurnaceRecipe {
    static get $javaClass(): any;
    constructor(result: ItemStack, source: Material);
    constructor(result: ItemStack, source: MaterialData);
    constructor(result: ItemStack, source: MaterialData, experience: number);
    constructor(result: ItemStack, source: Material, data: number);
    constructor(key: NamespacedKey, result: ItemStack, source: Material, experience: number, cookingTime: number);
    constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cookingTime: number);
    constructor(key: NamespacedKey, result: ItemStack, source: Material, data: number, experience: number, cookingTime: number);
}
