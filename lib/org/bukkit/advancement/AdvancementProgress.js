"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdvancementProgress {
    static get $javaClass() {
        return Java.type('org.bukkit.advancement.AdvancementProgress');
    }
    static $isInstance(obj) {
        return obj instanceof AdvancementProgress.$javaClass;
    }
}
exports.default = AdvancementProgress;
