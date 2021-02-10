"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LingeringPotion {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.LingeringPotion');
    }
    static $isInstance(obj) {
        return obj instanceof LingeringPotion.$javaClass;
    }
}
exports.default = LingeringPotion;
