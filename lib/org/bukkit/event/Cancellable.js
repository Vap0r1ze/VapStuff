"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cancellable {
    static get $javaClass() {
        return Java.type('org.bukkit.event.Cancellable');
    }
    static $isInstance(obj) {
        return obj instanceof Cancellable.$javaClass;
    }
}
exports.default = Cancellable;
