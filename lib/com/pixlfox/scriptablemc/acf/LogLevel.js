"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogLevel {
    static get $javaClass() {
        return Java.type('co.aikar.commands.LogLevel');
    }
    static $isInstance(obj) {
        return obj instanceof LogLevel.$javaClass;
    }
    static get ERROR() {
        return this.$javaClass.ERROR;
    }
    static get INFO() {
        return this.$javaClass.INFO;
    }
}
exports.default = LogLevel;
