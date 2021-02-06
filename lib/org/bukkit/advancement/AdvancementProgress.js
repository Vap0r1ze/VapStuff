export default class AdvancementProgress {
    static get $javaClass() {
        return Java.type('org.bukkit.advancement.AdvancementProgress');
    }
    static $isInstance(obj) {
        return obj instanceof AdvancementProgress.$javaClass;
    }
}
