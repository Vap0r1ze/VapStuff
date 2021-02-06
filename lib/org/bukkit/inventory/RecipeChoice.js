export default class RecipeChoice {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.RecipeChoice');
    }
    static $isInstance(obj) {
        return obj instanceof RecipeChoice.$javaClass;
    }
}
