export default class Consumer {
    static get $javaClass() {
        return Java.type('org.bukkit.util.Consumer');
    }
    static $isInstance(obj) {
        return obj instanceof Consumer.$javaClass;
    }
}
