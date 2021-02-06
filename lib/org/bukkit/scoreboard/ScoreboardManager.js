export default class ScoreboardManager {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.ScoreboardManager');
    }
    static $isInstance(obj) {
        return obj instanceof ScoreboardManager.$javaClass;
    }
}
