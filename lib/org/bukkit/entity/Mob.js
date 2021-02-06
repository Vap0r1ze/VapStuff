export default class Mob {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Mob');
    }
    static $isInstance(obj) {
        return obj instanceof Mob.$javaClass;
    }
}
