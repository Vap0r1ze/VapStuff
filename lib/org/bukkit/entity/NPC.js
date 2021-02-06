export default class NPC {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.NPC');
    }
    static $isInstance(obj) {
        return obj instanceof NPC.$javaClass;
    }
}
