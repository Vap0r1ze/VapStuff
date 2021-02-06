export default class EventPriority {
    static get $javaClass() {
        return Java.type('org.bukkit.event.EventPriority');
    }
    static get HIGH() {
        return this.$javaClass.HIGH;
    }
    static get HIGHEST() {
        return this.$javaClass.HIGHEST;
    }
    static get LOW() {
        return this.$javaClass.LOW;
    }
    static get LOWEST() {
        return this.$javaClass.LOWEST;
    }
    static get MONITOR() {
        return this.$javaClass.MONITOR;
    }
    static get NORMAL() {
        return this.$javaClass.NORMAL;
    }
}