export default class Hopper {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Hopper');
    }
    static $isInstance(obj) {
        return obj instanceof Hopper.$javaClass;
    }
}
