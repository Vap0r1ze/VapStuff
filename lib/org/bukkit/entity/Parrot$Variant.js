export default class Parrot$Variant {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Parrot$Variant');
    }
    static $isInstance(obj) {
        return obj instanceof Parrot$Variant.$javaClass;
    }
    static get BLUE() {
        return this.$javaClass.BLUE;
    }
    static get CYAN() {
        return this.$javaClass.CYAN;
    }
    static get GRAY() {
        return this.$javaClass.GRAY;
    }
    static get GREEN() {
        return this.$javaClass.GREEN;
    }
    static get RED() {
        return this.$javaClass.RED;
    }
}
