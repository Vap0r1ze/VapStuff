export default class ChatColor {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.ChatColor');
    }
    static $isInstance(obj) {
        return obj instanceof ChatColor.$javaClass;
    }
    static get ALL_CODES() {
        return ChatColor.$javaClass.ALL_CODES;
    }
    static get AQUA() {
        return ChatColor.$javaClass.AQUA;
    }
    static get BLACK() {
        return ChatColor.$javaClass.BLACK;
    }
    static get BLUE() {
        return ChatColor.$javaClass.BLUE;
    }
    static get BOLD() {
        return ChatColor.$javaClass.BOLD;
    }
    static get COLOR_CHAR() {
        return ChatColor.$javaClass.COLOR_CHAR;
    }
    static get DARK_AQUA() {
        return ChatColor.$javaClass.DARK_AQUA;
    }
    static get DARK_BLUE() {
        return ChatColor.$javaClass.DARK_BLUE;
    }
    static get DARK_GRAY() {
        return ChatColor.$javaClass.DARK_GRAY;
    }
    static get DARK_GREEN() {
        return ChatColor.$javaClass.DARK_GREEN;
    }
    static get DARK_PURPLE() {
        return ChatColor.$javaClass.DARK_PURPLE;
    }
    static get DARK_RED() {
        return ChatColor.$javaClass.DARK_RED;
    }
    static get GOLD() {
        return ChatColor.$javaClass.GOLD;
    }
    static get GRAY() {
        return ChatColor.$javaClass.GRAY;
    }
    static get GREEN() {
        return ChatColor.$javaClass.GREEN;
    }
    static get ITALIC() {
        return ChatColor.$javaClass.ITALIC;
    }
    static get LIGHT_PURPLE() {
        return ChatColor.$javaClass.LIGHT_PURPLE;
    }
    static get MAGIC() {
        return ChatColor.$javaClass.MAGIC;
    }
    static get RED() {
        return ChatColor.$javaClass.RED;
    }
    static get RESET() {
        return ChatColor.$javaClass.RESET;
    }
    static get STRIKETHROUGH() {
        return ChatColor.$javaClass.STRIKETHROUGH;
    }
    static get STRIP_COLOR_PATTERN() {
        return ChatColor.$javaClass.STRIP_COLOR_PATTERN;
    }
    static get UNDERLINE() {
        return ChatColor.$javaClass.UNDERLINE;
    }
    static get WHITE() {
        return ChatColor.$javaClass.WHITE;
    }
    static get YELLOW() {
        return ChatColor.$javaClass.YELLOW;
    }
    static getByChar(...args) {
        return ChatColor.$javaClass.getByChar(...args);
    }
    static of(...args) {
        return ChatColor.$javaClass.of(...args);
    }
    static stripColor(...args) {
        return ChatColor.$javaClass.stripColor(...args);
    }
    static translateAlternateColorCodes(...args) {
        return ChatColor.$javaClass.translateAlternateColorCodes(...args);
    }
    static valueOf(...args) {
        return ChatColor.$javaClass.valueOf(...args);
    }
    static values(...args) {
        return ChatColor.$javaClass.values(...args);
    }
}
