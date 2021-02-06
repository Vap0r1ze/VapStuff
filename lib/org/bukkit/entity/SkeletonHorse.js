export default class SkeletonHorse {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.SkeletonHorse');
    }
    static $isInstance(obj) {
        return obj instanceof SkeletonHorse.$javaClass;
    }
}
