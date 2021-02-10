"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lightable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Lightable');
    }
    static $isInstance(obj) {
        return obj instanceof Lightable.$javaClass;
    }
}
exports.default = Lightable;
