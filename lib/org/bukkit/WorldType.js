export default class WorldType {
    static get $javaClass() {
        return Java.type('org.bukkit.WorldType');
    }
    static get AMPLIFIED() {
        return this.$javaClass.AMPLIFIED;
    }
    static get BUFFET() {
        return this.$javaClass.BUFFET;
    }
    static get CUSTOMIZED() {
        return this.$javaClass.CUSTOMIZED;
    }
    static get FLAT() {
        return this.$javaClass.FLAT;
    }
    static get LARGE_BIOMES() {
        return this.$javaClass.LARGE_BIOMES;
    }
    static get NORMAL() {
        return this.$javaClass.NORMAL;
    }
    static get VERSION_1_1() {
        return this.$javaClass.VERSION_1_1;
    }
}
