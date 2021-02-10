"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventException {
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
exports.default = EventException;
