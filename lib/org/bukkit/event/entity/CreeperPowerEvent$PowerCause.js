export default class CreeperPowerEvent$PowerCause {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.CreeperPowerEvent$PowerCause');
    }
    static $isInstance(obj) {
        return obj instanceof CreeperPowerEvent$PowerCause.$javaClass;
    }
    static get LIGHTNING() {
        return this.$javaClass.LIGHTNING;
    }
    static get SET_OFF() {
        return this.$javaClass.SET_OFF;
    }
    static get SET_ON() {
        return this.$javaClass.SET_ON;
    }
}
