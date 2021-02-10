"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MagmaCube {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.MagmaCube');
    }
    static $isInstance(obj) {
        return obj instanceof MagmaCube.$javaClass;
    }
}
exports.default = MagmaCube;
