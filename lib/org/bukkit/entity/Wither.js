"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wither {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Wither');
    }
    static $isInstance(obj) {
        return obj instanceof Wither.$javaClass;
    }
}
exports.default = Wither;
