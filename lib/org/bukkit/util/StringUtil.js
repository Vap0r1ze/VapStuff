"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringUtil {
    static get $javaClass() {
        return Java.type('org.bukkit.util.StringUtil');
    }
    static $isInstance(obj) {
        return obj instanceof StringUtil.$javaClass;
    }
    constructor(...args) {
        return new StringUtil.$javaClass(...args);
    }
    static copyPartialMatches(...args) {
        return StringUtil.$javaClass.copyPartialMatches(...args);
    }
    static startsWithIgnoreCase(...args) {
        return StringUtil.$javaClass.startsWithIgnoreCase(...args);
    }
}
exports.default = StringUtil;
