"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Breedable {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Breedable');
    }
    static $isInstance(obj) {
        return obj instanceof Breedable.$javaClass;
    }
}
exports.default = Breedable;
