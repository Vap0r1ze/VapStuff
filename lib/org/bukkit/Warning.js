export default class Warning {
    static get $javaClass() {
        return Java.type('org.bukkit.Warning');
    }
    static $isInstance(obj) {
        return obj instanceof Warning.$javaClass;
    }
}
