export default class Scoreboard {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.Scoreboard');
    }
    static $isInstance(obj) {
        return obj instanceof Scoreboard.$javaClass;
    }
}
