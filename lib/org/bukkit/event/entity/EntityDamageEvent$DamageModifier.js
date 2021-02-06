export default class EntityDamageEvent$DamageModifier {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityDamageEvent$DamageModifier');
    }
    static $isInstance(obj) {
        return obj instanceof EntityDamageEvent$DamageModifier.$javaClass;
    }
    static get ABSORPTION() {
        return this.$javaClass.ABSORPTION;
    }
    static get ARMOR() {
        return this.$javaClass.ARMOR;
    }
    static get BASE() {
        return this.$javaClass.BASE;
    }
    static get BLOCKING() {
        return this.$javaClass.BLOCKING;
    }
    static get HARD_HAT() {
        return this.$javaClass.HARD_HAT;
    }
    static get MAGIC() {
        return this.$javaClass.MAGIC;
    }
    static get RESISTANCE() {
        return this.$javaClass.RESISTANCE;
    }
}
