export default class Objective {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.Objective');
    }
    static $isInstance(obj) {
        return obj instanceof Objective.$javaClass;
    }
}
