"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Objective {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.Objective');
    }
    static $isInstance(obj) {
        return obj instanceof Objective.$javaClass;
    }
}
exports.default = Objective;
