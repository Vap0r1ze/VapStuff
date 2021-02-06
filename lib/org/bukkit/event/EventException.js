export default class EventException {
    static get $javaClass() {
        return Java.type('org.bukkit.event.EventException');
    }
    static $isInstance(obj) {
        return obj instanceof EventException.$javaClass;
    }
    constructor(...args) {
        return new EventException.$javaClass(...args);
    }
}
