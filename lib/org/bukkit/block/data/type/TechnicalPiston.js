"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TechnicalPiston {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.TechnicalPiston');
    }
    static $isInstance(obj) {
        return obj instanceof TechnicalPiston.$javaClass;
    }
}
exports.default = TechnicalPiston;
