export default class DisplaySlot {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.DisplaySlot');
    }
    static $isInstance(obj) {
        return obj instanceof DisplaySlot.$javaClass;
    }
    static get BELOW_NAME() {
        return this.$javaClass.BELOW_NAME;
    }
    static get PLAYER_LIST() {
        return this.$javaClass.PLAYER_LIST;
    }
    static get SIDEBAR() {
        return this.$javaClass.SIDEBAR;
    }
}
