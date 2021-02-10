"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CocoaPlant$CocoaPlantSize {
    static get $javaClass() {
        return Java.type('org.bukkit.material.CocoaPlant$CocoaPlantSize');
    }
    static $isInstance(obj) {
        return obj instanceof CocoaPlant$CocoaPlantSize.$javaClass;
    }
    static get LARGE() {
        return this.$javaClass.LARGE;
    }
    static get MEDIUM() {
        return this.$javaClass.MEDIUM;
    }
    static get SMALL() {
        return this.$javaClass.SMALL;
    }
}
exports.default = CocoaPlant$CocoaPlantSize;
