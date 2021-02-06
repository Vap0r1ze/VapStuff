export default class Horse$Variant {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Horse$Variant');
    }
    static $isInstance(obj) {
        return obj instanceof Horse$Variant.$javaClass;
    }
    static get DONKEY() {
        return this.$javaClass.DONKEY;
    }
    static get HORSE() {
        return this.$javaClass.HORSE;
    }
    static get LLAMA() {
        return this.$javaClass.LLAMA;
    }
    static get MULE() {
        return this.$javaClass.MULE;
    }
    static get SKELETON_HORSE() {
        return this.$javaClass.SKELETON_HORSE;
    }
    static get UNDEAD_HORSE() {
        return this.$javaClass.UNDEAD_HORSE;
    }
}
