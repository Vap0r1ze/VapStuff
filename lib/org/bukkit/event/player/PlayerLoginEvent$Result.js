"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerLoginEvent$Result {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerLoginEvent$Result');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerLoginEvent$Result.$javaClass;
    }
    static get ALLOWED() {
        return this.$javaClass.ALLOWED;
    }
    static get KICK_BANNED() {
        return this.$javaClass.KICK_BANNED;
    }
    static get KICK_FULL() {
        return this.$javaClass.KICK_FULL;
    }
    static get KICK_OTHER() {
        return this.$javaClass.KICK_OTHER;
    }
    static get KICK_WHITELIST() {
        return this.$javaClass.KICK_WHITELIST;
    }
}
exports.default = PlayerLoginEvent$Result;