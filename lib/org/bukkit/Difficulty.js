export default class Difficulty {
    static get $javaClass() {
        return Java.type('org.bukkit.Difficulty');
    }
    static $isInstance(obj) {
        return obj instanceof Difficulty.$javaClass;
    }
    static get EASY() {
        return this.$javaClass.EASY;
    }
    static get HARD() {
        return this.$javaClass.HARD;
    }
    static get NORMAL() {
        return this.$javaClass.NORMAL;
    }
    static get PEACEFUL() {
        return this.$javaClass.PEACEFUL;
    }
}
