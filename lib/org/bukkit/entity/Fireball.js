export default class Fireball {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Fireball');
    }
    static $isInstance(obj) {
        return obj instanceof Fireball.$javaClass;
    }
}
