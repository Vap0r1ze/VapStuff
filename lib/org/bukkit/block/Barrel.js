export default class Barrel {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Barrel');
    }
    static $isInstance(obj) {
        return obj instanceof Barrel.$javaClass;
    }
}
