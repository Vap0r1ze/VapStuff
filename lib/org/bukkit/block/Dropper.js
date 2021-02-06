export default class Dropper {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Dropper');
    }
    static $isInstance(obj) {
        return obj instanceof Dropper.$javaClass;
    }
}
