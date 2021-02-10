"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
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
exports.default = Event;
