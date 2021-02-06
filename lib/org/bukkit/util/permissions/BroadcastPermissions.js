export default class BroadcastPermissions {
    static get $javaClass() {
        return Java.type('org.bukkit.util.permissions.BroadcastPermissions');
    }
    static $isInstance(obj) {
        return obj instanceof BroadcastPermissions.$javaClass;
    }
    static registerPermissions(...args) {
        return BroadcastPermissions.$javaClass.registerPermissions(...args);
    }
}
