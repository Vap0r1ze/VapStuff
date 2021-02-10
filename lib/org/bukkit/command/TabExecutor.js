"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TabExecutor {
    static get $javaClass() {
        return Java.type('org.bukkit.command.TabExecutor');
    }
    static $isInstance(obj) {
        return obj instanceof TabExecutor.$javaClass;
    }
}
exports.default = TabExecutor;
