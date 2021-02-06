export default class Boss {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Boss');
    }
    static $isInstance(obj) {
        return obj instanceof Boss.$javaClass;
    }
}
