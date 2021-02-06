export default class BarColor {
    static get $javaClass() {
        return Java.type('org.bukkit.boss.BarColor');
    }
    static $isInstance(obj) {
        return obj instanceof BarColor.$javaClass;
    }
    static get BLUE() {
        return this.$javaClass.BLUE;
    }
    static get GREEN() {
        return this.$javaClass.GREEN;
    }
    static get PINK() {
        return this.$javaClass.PINK;
    }
    static get PURPLE() {
        return this.$javaClass.PURPLE;
    }
    static get RED() {
        return this.$javaClass.RED;
    }
    static get WHITE() {
        return this.$javaClass.WHITE;
    }
    static get YELLOW() {
        return this.$javaClass.YELLOW;
    }
}
