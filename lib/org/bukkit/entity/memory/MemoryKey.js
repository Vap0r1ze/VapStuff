export default class MemoryKey {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.memory.MemoryKey');
    }
    static $isInstance(obj) {
        return obj instanceof MemoryKey.$javaClass;
    }
    static get ADMIRING_DISABLED() {
        return MemoryKey.$javaClass.ADMIRING_DISABLED;
    }
    static get ADMIRING_ITEM() {
        return MemoryKey.$javaClass.ADMIRING_ITEM;
    }
    static get ANGRY_AT() {
        return MemoryKey.$javaClass.ANGRY_AT;
    }
    static get GOLEM_DETECTED_RECENTLY() {
        return MemoryKey.$javaClass.GOLEM_DETECTED_RECENTLY;
    }
    static get HOME() {
        return MemoryKey.$javaClass.HOME;
    }
    static get HUNTED_RECENTLY() {
        return MemoryKey.$javaClass.HUNTED_RECENTLY;
    }
    static get JOB_SITE() {
        return MemoryKey.$javaClass.JOB_SITE;
    }
    static get LAST_SLEPT() {
        return MemoryKey.$javaClass.LAST_SLEPT;
    }
    static get LAST_WOKEN() {
        return MemoryKey.$javaClass.LAST_WOKEN;
    }
    static get LAST_WORKED_AT_POI() {
        return MemoryKey.$javaClass.LAST_WORKED_AT_POI;
    }
    static get MEETING_POINT() {
        return MemoryKey.$javaClass.MEETING_POINT;
    }
    static get POTENTIAL_JOB_SITE() {
        return MemoryKey.$javaClass.POTENTIAL_JOB_SITE;
    }
    static get UNIVERSAL_ANGER() {
        return MemoryKey.$javaClass.UNIVERSAL_ANGER;
    }
    static getByKey(...args) {
        return MemoryKey.$javaClass.getByKey(...args);
    }
    static values(...args) {
        return MemoryKey.$javaClass.values(...args);
    }
}
