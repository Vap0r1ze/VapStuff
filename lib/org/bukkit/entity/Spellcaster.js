"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Spellcaster {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Spellcaster');
    }
    static $isInstance(obj) {
        return obj instanceof Spellcaster.$javaClass;
    }
}
exports.default = Spellcaster;
