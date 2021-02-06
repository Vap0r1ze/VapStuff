export default class StructureBlock$Mode {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.StructureBlock$Mode');
    }
    static $isInstance(obj) {
        return obj instanceof StructureBlock$Mode.$javaClass;
    }
    static get CORNER() {
        return this.$javaClass.CORNER;
    }
    static get DATA() {
        return this.$javaClass.DATA;
    }
    static get LOAD() {
        return this.$javaClass.LOAD;
    }
    static get SAVE() {
        return this.$javaClass.SAVE;
    }
}
