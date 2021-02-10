"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerBedEnterEvent$BedEnterResult {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerBedEnterEvent$BedEnterResult');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerBedEnterEvent$BedEnterResult.$javaClass;
    }
    static get NOT_POSSIBLE_HERE() {
        return this.$javaClass.NOT_POSSIBLE_HERE;
    }
    static get NOT_POSSIBLE_NOW() {
        return this.$javaClass.NOT_POSSIBLE_NOW;
    }
    static get NOT_SAFE() {
        return this.$javaClass.NOT_SAFE;
    }
    static get OK() {
        return this.$javaClass.OK;
    }
    static get OTHER_PROBLEM() {
        return this.$javaClass.OTHER_PROBLEM;
    }
    static get TOO_FAR_AWAY() {
        return this.$javaClass.TOO_FAR_AWAY;
    }
}
exports.default = PlayerBedEnterEvent$BedEnterResult;
