export default class EventHandler {
    static get $javaClass() {
        return Java.type('org.bukkit.event.EventHandler');
    }
    static $isInstance(obj) {
        return obj instanceof EventHandler.$javaClass;
    }
}
