"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EndGateway {
    static get $javaClass() {
        return Java.type('org.bukkit.block.EndGateway');
    }
    static $isInstance(obj) {
        return obj instanceof EndGateway.$javaClass;
    }
}
exports.default = EndGateway;
