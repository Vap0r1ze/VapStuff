export default class UndefinedNullability {
    static get $javaClass() {
        return Java.type('org.bukkit.UndefinedNullability');
    }
    static $isInstance(obj) {
        return obj instanceof UndefinedNullability.$javaClass;
    }
}
