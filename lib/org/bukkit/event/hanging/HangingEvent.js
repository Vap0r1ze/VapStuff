export default class HangingEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.hanging.HangingEvent');
    }
    static $isInstance(obj) {
        return obj instanceof HangingEvent.$javaClass;
    }
}
