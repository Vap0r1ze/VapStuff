export default class Llama$Color {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Llama$Color');
    }
    static $isInstance(obj) {
        return obj instanceof Llama$Color.$javaClass;
    }
    static get BROWN() {
        return this.$javaClass.BROWN;
    }
    static get CREAMY() {
        return this.$javaClass.CREAMY;
    }
    static get GRAY() {
        return this.$javaClass.GRAY;
    }
    static get WHITE() {
        return this.$javaClass.WHITE;
    }
}
