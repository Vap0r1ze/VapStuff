export default class Leaves {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Leaves');
    }
    static $isInstance(obj) {
        return obj instanceof Leaves.$javaClass;
    }
}
