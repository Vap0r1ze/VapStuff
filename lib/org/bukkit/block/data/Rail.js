"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rail {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Rail');
    }
    static $isInstance(obj) {
        return obj instanceof Rail.$javaClass;
    }
}
exports.default = Rail;
