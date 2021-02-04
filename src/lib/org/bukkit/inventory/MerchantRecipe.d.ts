import ItemStack from './ItemStack.js';
import Recipe from './Recipe.js';
export default interface MerchantRecipe extends Recipe {
    addIngredient(item: ItemStack): void;
    getIngredients(): Array<ItemStack>;
    getMaxUses(): number;
    getPriceMultiplier(): number;
    getResult(): ItemStack;
    getUses(): number;
    getVillagerExperience(): number;
    hasExperienceReward(): boolean;
    removeIngredient(index: number): void;
    setExperienceReward(flag: boolean): void;
    setIngredients(ingredients: Array<any>): void;
    setMaxUses(maxUses: number): void;
    setPriceMultiplier(priceMultiplier: number): void;
    setUses(uses: number): void;
    setVillagerExperience(villagerExperience: number): void;
}
export default class MerchantRecipe {
    static get $javaClass(): any;
    constructor(result: ItemStack, maxUses: number);
    constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean);
    constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean, villagerExperience: number, priceMultiplier: number);
}
