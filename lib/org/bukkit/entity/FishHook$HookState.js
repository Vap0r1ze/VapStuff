"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FishHook$HookState {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.FishHook$HookState');
    }
    static $isInstance(obj) {
        return obj instanceof FishHook$HookState.$javaClass;
    }
    static get BOBBING() {
        return this.$javaClass.BOBBING;
    }
    static get HOOKED_ENTITY() {
        return this.$javaClass.HOOKED_ENTITY;
    }
    static get UNHOOKED() {
        return this.$javaClass.UNHOOKED;
    }
}
exports.default = FishHook$HookState;
