export default class Permissible {
    static get $javaClass() {
        return Java.type('org.bukkit.permissions.Permissible');
    }
    static $isInstance(obj) {
        return obj instanceof Permissible.$javaClass;
    }
}
