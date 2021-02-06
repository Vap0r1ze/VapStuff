export default class RaidEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.raid.RaidEvent');
    }
    static $isInstance(obj) {
        return obj instanceof RaidEvent.$javaClass;
    }
}
