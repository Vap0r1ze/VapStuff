"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fish {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Fish');
    }
    static $isInstance(obj) {
        return obj instanceof Fish.$javaClass;
    }
}
exports.default = Fish;
