"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Door {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Door');
    }
    static $isInstance(obj) {
        return obj instanceof Door.$javaClass;
    }
    constructor(...args) {
        return new Door.$javaClass(...args);
    }
    static getWoodDoorOfSpecies(...args) {
        return Door.$javaClass.getWoodDoorOfSpecies(...args);
    }
}
exports.default = Door;
