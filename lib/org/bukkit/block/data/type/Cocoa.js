export default class Cocoa {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Cocoa');
    }
    static $isInstance(obj) {
        return obj instanceof Cocoa.$javaClass;
    }
}
