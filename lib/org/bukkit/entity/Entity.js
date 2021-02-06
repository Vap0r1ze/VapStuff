export default class Entity {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Entity');
    }
    static $isInstance(obj) {
        return obj instanceof Entity.$javaClass;
    }
}
