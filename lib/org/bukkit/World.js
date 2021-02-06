export default class World {
    static get $javaClass() {
        return Java.type('org.bukkit.World');
    }
    static $isInstance(obj) {
        return obj instanceof World.$javaClass;
    }
}
