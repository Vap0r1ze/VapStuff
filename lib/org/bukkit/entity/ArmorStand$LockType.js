export default class ArmorStand$LockType {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ArmorStand$LockType');
    }
    static $isInstance(obj) {
        return obj instanceof ArmorStand$LockType.$javaClass;
    }
    static get ADDING() {
        return this.$javaClass.ADDING;
    }
    static get ADDING_OR_CHANGING() {
        return this.$javaClass.ADDING_OR_CHANGING;
    }
    static get REMOVING_OR_CHANGING() {
        return this.$javaClass.REMOVING_OR_CHANGING;
    }
}
