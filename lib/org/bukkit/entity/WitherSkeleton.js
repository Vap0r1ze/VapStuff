"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WitherSkeleton {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.WitherSkeleton');
    }
    static $isInstance(obj) {
        return obj instanceof WitherSkeleton.$javaClass;
    }
}
exports.default = WitherSkeleton;
