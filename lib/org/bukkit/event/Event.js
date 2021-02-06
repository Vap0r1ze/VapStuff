export default class Event {
    static get $javaClass() {
        return Java.type('org.bukkit.event.Event');
    }
    static $isInstance(obj) {
        return obj instanceof Event.$javaClass;
    }
    constructor(...args) {
        return new Event.$javaClass(...args);
    }
}
