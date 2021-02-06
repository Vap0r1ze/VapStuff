export default class TNT {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.TNT');
    }
    static $isInstance(obj) {
        return obj instanceof TNT.$javaClass;
    }
}
