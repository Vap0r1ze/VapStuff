"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Location {
    static get $javaClass() {
        return Java.type('org.bukkit.Location');
    }
    static $isInstance(obj) {
        return obj instanceof Location.$javaClass;
    }
    constructor(...args) {
        return new Location.$javaClass(...args);
    }
    static deserialize(...args) {
        return Location.$javaClass.deserialize(...args);
    }
    static locToBlock(...args) {
        return Location.$javaClass.locToBlock(...args);
    }
    static normalizePitch(...args) {
        return Location.$javaClass.normalizePitch(...args);
    }
    static normalizeYaw(...args) {
        return Location.$javaClass.normalizeYaw(...args);
    }
}
exports.default = Location;
