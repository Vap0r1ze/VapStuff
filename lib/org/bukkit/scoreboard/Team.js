"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Team {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.Team');
    }
    static $isInstance(obj) {
        return obj instanceof Team.$javaClass;
    }
}
exports.default = Team;
