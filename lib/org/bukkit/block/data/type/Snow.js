"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Snow {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Snow');
    }
    static $isInstance(obj) {
        return obj instanceof Snow.$javaClass;
    }
}
exports.default = Snow;
