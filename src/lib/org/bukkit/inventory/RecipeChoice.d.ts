import ItemStack from './ItemStack.js';
export default interface RecipeChoice {
    and(arg0: any): any;
    clone(): any;
    clone(): RecipeChoice;
    getItemStack(): ItemStack;
    negate(): any;
    or(arg0: any): any;
    test(arg0: any): boolean;
    test(arg0: ItemStack): boolean;
}
export default class RecipeChoice {
    static get $javaClass(): any;
}
