"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jukebox {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Jukebox');
    }
    static $isInstance(obj) {
        return obj instanceof Jukebox.$javaClass;
    }
}
exports.default = Jukebox;
