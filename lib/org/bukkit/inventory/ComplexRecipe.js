export default class ComplexRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.ComplexRecipe');
    }
    static $isInstance(obj) {
        return obj instanceof ComplexRecipe.$javaClass;
    }
}
