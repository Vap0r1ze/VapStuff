export default class ServerOperator {
    static get $javaClass() {
        return Java.type('org.bukkit.permissions.ServerOperator');
    }
    static $isInstance(obj) {
        return obj instanceof ServerOperator.$javaClass;
    }
}
