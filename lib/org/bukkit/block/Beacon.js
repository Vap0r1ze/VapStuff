export default class Beacon {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Beacon');
    }
    static $isInstance(obj) {
        return obj instanceof Beacon.$javaClass;
    }
}
