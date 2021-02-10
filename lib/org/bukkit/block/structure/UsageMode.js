"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsageMode {
    static get $javaClass() {
        return Java.type('org.bukkit.block.structure.UsageMode');
    }
    static $isInstance(obj) {
        return obj instanceof UsageMode.$javaClass;
    }
    static get CORNER() {
        return this.$javaClass.CORNER;
    }
    static get DATA() {
        return this.$javaClass.DATA;
    }
    static get LOAD() {
        return this.$javaClass.LOAD;
    }
    static get SAVE() {
        return this.$javaClass.SAVE;
    }
}
exports.default = UsageMode;
