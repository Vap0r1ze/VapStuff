"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EndPortalFrame {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.EndPortalFrame');
    }
    static $isInstance(obj) {
        return obj instanceof EndPortalFrame.$javaClass;
    }
}
exports.default = EndPortalFrame;
