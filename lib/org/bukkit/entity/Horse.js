export default class Horse {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Horse');
    }
    static $isInstance(obj) {
        return obj instanceof Horse.$javaClass;
    }
}
