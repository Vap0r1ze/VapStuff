"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Team$Option {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.Team$Option');
    }
    static $isInstance(obj) {
        return obj instanceof Team$Option.$javaClass;
    }
    static get COLLISION_RULE() {
        return this.$javaClass.COLLISION_RULE;
    }
    static get DEATH_MESSAGE_VISIBILITY() {
        return this.$javaClass.DEATH_MESSAGE_VISIBILITY;
    }
    static get NAME_TAG_VISIBILITY() {
        return this.$javaClass.NAME_TAG_VISIBILITY;
    }
}
exports.default = Team$Option;
