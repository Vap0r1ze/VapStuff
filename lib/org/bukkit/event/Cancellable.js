export default class Cancellable {
    static get $javaClass() {
        return Java.type('org.bukkit.event.Cancellable');
    }
    static $isInstance(obj) {
        return obj instanceof Cancellable.$javaClass;
    }
}
