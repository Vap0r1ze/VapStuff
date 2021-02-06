export default class World$Environment {
    static get $javaClass() {
        return Java.type('org.bukkit.World$Environment');
    }
    static $isInstance(obj) {
        return obj instanceof World$Environment.$javaClass;
    }
    static get NETHER() {
        return this.$javaClass.NETHER;
    }
    static get NORMAL() {
        return this.$javaClass.NORMAL;
    }
    static get THE_END() {
        return this.$javaClass.THE_END;
    }
}
