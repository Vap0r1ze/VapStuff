"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chicken {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Chicken');
    }
    static $isInstance(obj) {
        return obj instanceof Chicken.$javaClass;
    }
}
exports.default = Chicken;
