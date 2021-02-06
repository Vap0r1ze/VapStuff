export default class Creature {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Creature');
    }
    static $isInstance(obj) {
        return obj instanceof Creature.$javaClass;
    }
}
