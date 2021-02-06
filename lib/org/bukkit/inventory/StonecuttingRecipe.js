export default class StonecuttingRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.StonecuttingRecipe');
    }
    static $isInstance(obj) {
        return obj instanceof StonecuttingRecipe.$javaClass;
    }
    constructor(...args) {
        return new StonecuttingRecipe.$javaClass(...args);
    }
}
