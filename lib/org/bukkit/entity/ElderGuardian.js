"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ElderGuardian {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ElderGuardian');
    }
    static $isInstance(obj) {
        return obj instanceof ElderGuardian.$javaClass;
    }
}
exports.default = ElderGuardian;
