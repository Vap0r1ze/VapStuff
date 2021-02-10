"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MushroomCow {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.MushroomCow');
    }
    static $isInstance(obj) {
        return obj instanceof MushroomCow.$javaClass;
    }
}
exports.default = MushroomCow;
