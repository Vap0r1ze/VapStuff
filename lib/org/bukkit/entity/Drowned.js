"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Drowned {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Drowned');
    }
    static $isInstance(obj) {
        return obj instanceof Drowned.$javaClass;
    }
}
exports.default = Drowned;
