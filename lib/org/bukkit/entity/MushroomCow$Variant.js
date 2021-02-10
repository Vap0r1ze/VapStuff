"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MushroomCow$Variant {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.MushroomCow$Variant');
    }
    static $isInstance(obj) {
        return obj instanceof MushroomCow$Variant.$javaClass;
    }
    static get BROWN() {
        return this.$javaClass.BROWN;
    }
    static get RED() {
        return this.$javaClass.RED;
    }
}
exports.default = MushroomCow$Variant;
