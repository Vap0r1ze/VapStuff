"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TripwireHook {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.TripwireHook');
    }
    static $isInstance(obj) {
        return obj instanceof TripwireHook.$javaClass;
    }
}
exports.default = TripwireHook;
