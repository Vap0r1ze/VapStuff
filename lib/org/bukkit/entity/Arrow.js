export default class Arrow {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Arrow');
    }
    static $isInstance(obj) {
        return obj instanceof Arrow.$javaClass;
    }
}
