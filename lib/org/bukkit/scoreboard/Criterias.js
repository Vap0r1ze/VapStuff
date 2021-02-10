"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Criterias {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.Criterias');
    }
    static $isInstance(obj) {
        return obj instanceof Criterias.$javaClass;
    }
    static get DEATHS() {
        return Criterias.$javaClass.DEATHS;
    }
    static get HEALTH() {
        return Criterias.$javaClass.HEALTH;
    }
    static get PLAYER_KILLS() {
        return Criterias.$javaClass.PLAYER_KILLS;
    }
    static get TOTAL_KILLS() {
        return Criterias.$javaClass.TOTAL_KILLS;
    }
}
exports.default = Criterias;
