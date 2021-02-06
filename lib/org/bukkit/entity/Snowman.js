export default class Snowman {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Snowman');
    }
    static $isInstance(obj) {
        return obj instanceof Snowman.$javaClass;
    }
}
