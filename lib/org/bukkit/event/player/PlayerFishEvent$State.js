"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerFishEvent$State {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerFishEvent$State');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerFishEvent$State.$javaClass;
    }
    static get BITE() {
        return this.$javaClass.BITE;
    }
    static get CAUGHT_ENTITY() {
        return this.$javaClass.CAUGHT_ENTITY;
    }
    static get CAUGHT_FISH() {
        return this.$javaClass.CAUGHT_FISH;
    }
    static get FAILED_ATTEMPT() {
        return this.$javaClass.FAILED_ATTEMPT;
    }
    static get FISHING() {
        return this.$javaClass.FISHING;
    }
    static get IN_GROUND() {
        return this.$javaClass.IN_GROUND;
    }
    static get REEL_IN() {
        return this.$javaClass.REEL_IN;
    }
}
exports.default = PlayerFishEvent$State;
