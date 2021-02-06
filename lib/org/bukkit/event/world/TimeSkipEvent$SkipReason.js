export default class TimeSkipEvent$SkipReason {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.TimeSkipEvent$SkipReason');
    }
    static $isInstance(obj) {
        return obj instanceof TimeSkipEvent$SkipReason.$javaClass;
    }
    static get COMMAND() {
        return this.$javaClass.COMMAND;
    }
    static get CUSTOM() {
        return this.$javaClass.CUSTOM;
    }
    static get NIGHT_SKIP() {
        return this.$javaClass.NIGHT_SKIP;
    }
}
