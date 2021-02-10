"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FishHook {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.FishHook');
    }
    static $isInstance(obj) {
        return obj instanceof FishHook.$javaClass;
    }
}
exports.default = FishHook;
