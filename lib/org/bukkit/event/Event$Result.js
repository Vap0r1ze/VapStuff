"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event$Result {
    static get $javaClass() {
        return Java.type('org.bukkit.event.Event$Result');
    }
    static $isInstance(obj) {
        return obj instanceof Event$Result.$javaClass;
    }
    static get ALLOW() {
        return this.$javaClass.ALLOW;
    }
    static get DEFAULT() {
        return this.$javaClass.DEFAULT;
    }
    static get DENY() {
        return this.$javaClass.DENY;
    }
}
exports.default = Event$Result;
