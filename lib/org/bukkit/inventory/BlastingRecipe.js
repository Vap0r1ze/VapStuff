export default class BlastingRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.BlastingRecipe');
    }
    static $isInstance(obj) {
        return obj instanceof BlastingRecipe.$javaClass;
    }
    constructor(...args) {
        return new BlastingRecipe.$javaClass(...args);
    }
}
