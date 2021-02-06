export default class CachedServerIcon {
    static get $javaClass() {
        return Java.type('org.bukkit.util.CachedServerIcon');
    }
    static $isInstance(obj) {
        return obj instanceof CachedServerIcon.$javaClass;
    }
}
