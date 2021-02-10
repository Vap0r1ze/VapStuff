"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PortalCreateEvent$CreateReason {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.PortalCreateEvent$CreateReason');
    }
    static $isInstance(obj) {
        return obj instanceof PortalCreateEvent$CreateReason.$javaClass;
    }
    static get END_PLATFORM() {
        return this.$javaClass.END_PLATFORM;
    }
    static get FIRE() {
        return this.$javaClass.FIRE;
    }
    static get NETHER_PAIR() {
        return this.$javaClass.NETHER_PAIR;
    }
}
exports.default = PortalCreateEvent$CreateReason;
