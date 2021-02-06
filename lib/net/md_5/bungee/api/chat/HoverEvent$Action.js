export default class HoverEvent$Action {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.HoverEvent$Action');
    }
    static $isInstance(obj) {
        return obj instanceof HoverEvent$Action.$javaClass;
    }
    static get SHOW_ACHIEVEMENT() {
        return this.$javaClass.SHOW_ACHIEVEMENT;
    }
    static get SHOW_ENTITY() {
        return this.$javaClass.SHOW_ENTITY;
    }
    static get SHOW_ITEM() {
        return this.$javaClass.SHOW_ITEM;
    }
    static get SHOW_TEXT() {
        return this.$javaClass.SHOW_TEXT;
    }
}
