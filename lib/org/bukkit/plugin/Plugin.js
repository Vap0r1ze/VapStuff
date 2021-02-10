"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Plugin {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.Plugin');
    }
    static $isInstance(obj) {
        return obj instanceof Plugin.$javaClass;
    }
}
exports.default = Plugin;
