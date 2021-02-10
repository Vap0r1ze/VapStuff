"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelpMap {
    static get $javaClass() {
        return Java.type('org.bukkit.help.HelpMap');
    }
    static $isInstance(obj) {
        return obj instanceof HelpMap.$javaClass;
    }
}
exports.default = HelpMap;
