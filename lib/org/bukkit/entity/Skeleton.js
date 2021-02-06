export default class Skeleton {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Skeleton');
    }
    static $isInstance(obj) {
        return obj instanceof Skeleton.$javaClass;
    }
}
