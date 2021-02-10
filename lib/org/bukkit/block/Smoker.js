"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Smoker {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Smoker');
    }
    static $isInstance(obj) {
        return obj instanceof Smoker.$javaClass;
    }
}
exports.default = Smoker;
