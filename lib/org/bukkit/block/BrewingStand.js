export default class BrewingStand {
    static get $javaClass() {
        return Java.type('org.bukkit.block.BrewingStand');
    }
    static $isInstance(obj) {
        return obj instanceof BrewingStand.$javaClass;
    }
}
