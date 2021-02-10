"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Score {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.Score');
    }
    static $isInstance(obj) {
        return obj instanceof Score.$javaClass;
    }
}
exports.default = Score;
