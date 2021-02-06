export default class Dispenser {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Dispenser');
    }
    static $isInstance(obj) {
        return obj instanceof Dispenser.$javaClass;
    }
}
