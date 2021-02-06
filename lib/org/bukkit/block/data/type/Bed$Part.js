export default class Bed$Part {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Bed$Part');
    }
    static $isInstance(obj) {
        return obj instanceof Bed$Part.$javaClass;
    }
    static get FOOT() {
        return this.$javaClass.FOOT;
    }
    static get HEAD() {
        return this.$javaClass.HEAD;
    }
}
