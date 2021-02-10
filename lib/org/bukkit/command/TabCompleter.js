"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TabCompleter {
    static get $javaClass() {
        return Java.type('org.bukkit.command.TabCompleter');
    }
    static $isInstance(obj) {
        return obj instanceof TabCompleter.$javaClass;
    }
}
exports.default = TabCompleter;
