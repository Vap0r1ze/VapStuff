export default class WitherSkeleton {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.WitherSkeleton');
    }
    static $isInstance(obj) {
        return obj instanceof WitherSkeleton.$javaClass;
    }
}
