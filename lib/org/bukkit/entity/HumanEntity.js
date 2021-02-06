export default class HumanEntity {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.HumanEntity');
    }
    static $isInstance(obj) {
        return obj instanceof HumanEntity.$javaClass;
    }
}
