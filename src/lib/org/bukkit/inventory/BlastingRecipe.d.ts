import CookingRecipe from './CookingRecipe.js';
import ItemStack from './ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import RecipeChoice from './RecipeChoice.js';
export default interface BlastingRecipe extends CookingRecipe {
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
    setInput(input: Material): CookingRecipe;
    setInputChoice(input: RecipeChoice): CookingRecipe;
}
export default class BlastingRecipe {
    static get $javaClass(): any;
    constructor(key: NamespacedKey, result: ItemStack, source: Material, experience: number, cookingTime: number);
    constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cookingTime: number);
}
