export default class StructureBlock {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.StructureBlock');
    }
    static $isInstance(obj) {
        return obj instanceof StructureBlock.$javaClass;
    }
}
