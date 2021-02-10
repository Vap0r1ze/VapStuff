"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkeletonHorse {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.SkeletonHorse');
    }
    static $isInstance(obj) {
        return obj instanceof SkeletonHorse.$javaClass;
    }
}
exports.default = SkeletonHorse;
