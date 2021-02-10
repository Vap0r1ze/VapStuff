"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExperienceOrb {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ExperienceOrb');
    }
    static $isInstance(obj) {
        return obj instanceof ExperienceOrb.$javaClass;
    }
}
exports.default = ExperienceOrb;
