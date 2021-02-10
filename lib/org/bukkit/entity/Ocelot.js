"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ocelot {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Ocelot');
    }
    static $isInstance(obj) {
        return obj instanceof Ocelot.$javaClass;
    }
}
exports.default = Ocelot;
