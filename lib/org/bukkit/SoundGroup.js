"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SoundGroup {
    static get $javaClass() {
        return Java.type('org.bukkit.SoundGroup');
    }
    static $isInstance(obj) {
        return obj instanceof SoundGroup.$javaClass;
    }
}
exports.default = SoundGroup;
