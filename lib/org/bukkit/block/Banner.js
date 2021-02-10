"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banner {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Banner');
    }
    static $isInstance(obj) {
        return obj instanceof Banner.$javaClass;
    }
}
exports.default = Banner;
