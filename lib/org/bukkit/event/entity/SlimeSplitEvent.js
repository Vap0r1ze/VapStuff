"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SlimeSplitEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.SlimeSplitEvent');
    }
    static $isInstance(obj) {
        return obj instanceof SlimeSplitEvent.$javaClass;
    }
    constructor(...args) {
        return new SlimeSplitEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return SlimeSplitEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = SlimeSplitEvent;
