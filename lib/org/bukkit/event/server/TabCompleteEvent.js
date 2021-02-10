"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TabCompleteEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.TabCompleteEvent');
    }
    static $isInstance(obj) {
        return obj instanceof TabCompleteEvent.$javaClass;
    }
    constructor(...args) {
        return new TabCompleteEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return TabCompleteEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = TabCompleteEvent;
