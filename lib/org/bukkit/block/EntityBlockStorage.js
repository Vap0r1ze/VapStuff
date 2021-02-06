export default class EntityBlockStorage {
    static get $javaClass() {
        return Java.type('org.bukkit.block.EntityBlockStorage');
    }
    static $isInstance(obj) {
        return obj instanceof EntityBlockStorage.$javaClass;
    }
}
