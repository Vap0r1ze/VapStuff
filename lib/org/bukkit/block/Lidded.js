export default class Lidded {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Lidded');
    }
    static $isInstance(obj) {
        return obj instanceof Lidded.$javaClass;
    }
}
