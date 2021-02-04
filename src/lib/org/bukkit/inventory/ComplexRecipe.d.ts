import ItemStack from './ItemStack.js';
import Keyed from '../../../org/bukkit/Keyed.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import Recipe from './Recipe.js';
export default interface ComplexRecipe extends Recipe, Keyed {
    getKey(): NamespacedKey;
    getResult(): ItemStack;
}
export default class ComplexRecipe {
    static get $javaClass(): any;
}
