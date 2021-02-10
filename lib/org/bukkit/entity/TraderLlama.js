"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TraderLlama {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.TraderLlama');
    }
    static $isInstance(obj) {
        return obj instanceof TraderLlama.$javaClass;
    }
}
exports.default = TraderLlama;
