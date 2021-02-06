export default class Fish {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Fish');
    }
    static $isInstance(obj) {
        return obj instanceof Fish.$javaClass;
    }
}
