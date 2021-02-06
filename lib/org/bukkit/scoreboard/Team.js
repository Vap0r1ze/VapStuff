export default class Team {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.Team');
    }
    static $isInstance(obj) {
        return obj instanceof Team.$javaClass;
    }
}
