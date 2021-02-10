"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Metadatable {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.Metadatable');
    }
    static $isInstance(obj) {
        return obj instanceof Metadatable.$javaClass;
    }
}
exports.default = Metadatable;
