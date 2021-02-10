"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TripwireHook {
    static get $javaClass() {
        return Java.type('org.bukkit.material.TripwireHook');
    }
    static $isInstance(obj) {
        return obj instanceof TripwireHook.$javaClass;
    }
    constructor(...args) {
        return new TripwireHook.$javaClass(...args);
    }
}
exports.default = TripwireHook;
