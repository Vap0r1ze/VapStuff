export default class Mirror {
    static get $javaClass() {
        return Java.type('org.bukkit.block.structure.Mirror');
    }
    static $isInstance(obj) {
        return obj instanceof Mirror.$javaClass;
    }
    static get FRONT_BACK() {
        return this.$javaClass.FRONT_BACK;
    }
    static get LEFT_RIGHT() {
        return this.$javaClass.LEFT_RIGHT;
    }
    static get NONE() {
        return this.$javaClass.NONE;
    }
}
