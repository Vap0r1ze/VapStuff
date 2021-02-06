export default class ChatColor {
    static get $javaClass() {
        return Java.type('org.bukkit.ChatColor');
    }
    static $isInstance(obj) {
        return obj instanceof ChatColor.$javaClass;
    }
    static get AQUA() {
        return this.$javaClass.AQUA;
    }
    static get BLACK() {
        return this.$javaClass.BLACK;
    }
    static get BLUE() {
        return this.$javaClass.BLUE;
    }
    static get BOLD() {
        return this.$javaClass.BOLD;
    }
    static get DARK_AQUA() {
        return this.$javaClass.DARK_AQUA;
    }
    static get DARK_BLUE() {
        return this.$javaClass.DARK_BLUE;
    }
    static get DARK_GRAY() {
        return this.$javaClass.DARK_GRAY;
    }
    static get DARK_GREEN() {
        return this.$javaClass.DARK_GREEN;
    }
    static get DARK_PURPLE() {
        return this.$javaClass.DARK_PURPLE;
    }
    static get DARK_RED() {
        return this.$javaClass.DARK_RED;
    }
    static get GOLD() {
        return this.$javaClass.GOLD;
    }
    static get GRAY() {
        return this.$javaClass.GRAY;
    }
    static get GREEN() {
        return this.$javaClass.GREEN;
    }
    static get ITALIC() {
        return this.$javaClass.ITALIC;
    }
    static get LIGHT_PURPLE() {
        return this.$javaClass.LIGHT_PURPLE;
    }
    static get MAGIC() {
        return this.$javaClass.MAGIC;
    }
    static get RED() {
        return this.$javaClass.RED;
    }
    static get RESET() {
        return this.$javaClass.RESET;
    }
    static get STRIKETHROUGH() {
        return this.$javaClass.STRIKETHROUGH;
    }
    static get UNDERLINE() {
        return this.$javaClass.UNDERLINE;
    }
    static get WHITE() {
        return this.$javaClass.WHITE;
    }
    static get YELLOW() {
        return this.$javaClass.YELLOW;
    }
}
