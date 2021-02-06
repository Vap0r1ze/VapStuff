export default class LeashHitch {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.LeashHitch');
    }
    static $isInstance(obj) {
        return obj instanceof LeashHitch.$javaClass;
    }
}
