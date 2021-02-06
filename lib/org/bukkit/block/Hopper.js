export default class Hopper {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Hopper');
    }
    static $isInstance(obj) {
        return obj instanceof Hopper.$javaClass;
    }
}
