"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerResourcePackStatusEvent$Status {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerResourcePackStatusEvent$Status');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerResourcePackStatusEvent$Status.$javaClass;
    }
    static get ACCEPTED() {
        return this.$javaClass.ACCEPTED;
    }
    static get DECLINED() {
        return this.$javaClass.DECLINED;
    }
    static get FAILED_DOWNLOAD() {
        return this.$javaClass.FAILED_DOWNLOAD;
    }
    static get SUCCESSFULLY_LOADED() {
        return this.$javaClass.SUCCESSFULLY_LOADED;
    }
}
exports.default = PlayerResourcePackStatusEvent$Status;
