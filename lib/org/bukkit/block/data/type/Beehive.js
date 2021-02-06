export default class Beehive {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Beehive');
    }
    static $isInstance(obj) {
        return obj instanceof Beehive.$javaClass;
    }
}
