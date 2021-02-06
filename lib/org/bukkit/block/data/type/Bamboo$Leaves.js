export default class Bamboo$Leaves {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Bamboo$Leaves');
    }
    static $isInstance(obj) {
        return obj instanceof Bamboo$Leaves.$javaClass;
    }
    static get LARGE() {
        return this.$javaClass.LARGE;
    }
    static get NONE() {
        return this.$javaClass.NONE;
    }
    static get SMALL() {
        return this.$javaClass.SMALL;
    }
}
