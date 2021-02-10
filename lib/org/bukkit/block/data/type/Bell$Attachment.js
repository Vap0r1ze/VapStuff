"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bell$Attachment {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Bell$Attachment');
    }
    static $isInstance(obj) {
        return obj instanceof Bell$Attachment.$javaClass;
    }
    static get CEILING() {
        return this.$javaClass.CEILING;
    }
    static get DOUBLE_WALL() {
        return this.$javaClass.DOUBLE_WALL;
    }
    static get FLOOR() {
        return this.$javaClass.FLOOR;
    }
    static get SINGLE_WALL() {
        return this.$javaClass.SINGLE_WALL;
    }
}
exports.default = Bell$Attachment;
