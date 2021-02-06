export default class Raider {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Raider');
    }
    static $isInstance(obj) {
        return obj instanceof Raider.$javaClass;
    }
}
