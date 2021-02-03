export default class RenderType {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.RenderType');
    }
    static get HEARTS() {
        return this.$javaClass.HEARTS;
    }
    static get INTEGER() {
        return this.$javaClass.INTEGER;
    }
}
