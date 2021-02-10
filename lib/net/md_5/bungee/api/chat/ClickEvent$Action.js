"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClickEvent$Action {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.ClickEvent$Action');
    }
    static $isInstance(obj) {
        return obj instanceof ClickEvent$Action.$javaClass;
    }
    static get CHANGE_PAGE() {
        return this.$javaClass.CHANGE_PAGE;
    }
    static get COPY_TO_CLIPBOARD() {
        return this.$javaClass.COPY_TO_CLIPBOARD;
    }
    static get OPEN_FILE() {
        return this.$javaClass.OPEN_FILE;
    }
    static get OPEN_URL() {
        return this.$javaClass.OPEN_URL;
    }
    static get RUN_COMMAND() {
        return this.$javaClass.RUN_COMMAND;
    }
    static get SUGGEST_COMMAND() {
        return this.$javaClass.SUGGEST_COMMAND;
    }
}
exports.default = ClickEvent$Action;
