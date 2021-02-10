"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cow {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Cow');
    }
    static $isInstance(obj) {
        return obj instanceof Cow.$javaClass;
    }
}
exports.default = Cow;
