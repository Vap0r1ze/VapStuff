export default class TNTPrimed {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.TNTPrimed');
    }
    static $isInstance(obj) {
        return obj instanceof TNTPrimed.$javaClass;
    }
}
