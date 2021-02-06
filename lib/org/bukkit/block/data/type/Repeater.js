export default class Repeater {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Repeater');
    }
    static $isInstance(obj) {
        return obj instanceof Repeater.$javaClass;
    }
}
