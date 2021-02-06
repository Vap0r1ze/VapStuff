export default class TechnicalPiston$Type {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.TechnicalPiston$Type');
    }
    static $isInstance(obj) {
        return obj instanceof TechnicalPiston$Type.$javaClass;
    }
    static get NORMAL() {
        return this.$javaClass.NORMAL;
    }
    static get STICKY() {
        return this.$javaClass.STICKY;
    }
}
