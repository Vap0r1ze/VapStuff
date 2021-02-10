"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LightningStrikeEvent$Cause {
    static get $javaClass() {
        return Java.type('org.bukkit.event.weather.LightningStrikeEvent$Cause');
    }
    static $isInstance(obj) {
        return obj instanceof LightningStrikeEvent$Cause.$javaClass;
    }
    static get COMMAND() {
        return this.$javaClass.COMMAND;
    }
    static get TRAP() {
        return this.$javaClass.TRAP;
    }
    static get TRIDENT() {
        return this.$javaClass.TRIDENT;
    }
    static get UNKNOWN() {
        return this.$javaClass.UNKNOWN;
    }
    static get WEATHER() {
        return this.$javaClass.WEATHER;
    }
}
exports.default = LightningStrikeEvent$Cause;
