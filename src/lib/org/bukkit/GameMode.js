export default class GameMode {
    static get $javaClass() {
        return Java.type('org.bukkit.GameMode');
    }
    static get ADVENTURE() {
        return this.$javaClass.ADVENTURE;
    }
    static get CREATIVE() {
        return this.$javaClass.CREATIVE;
    }
    static get SPECTATOR() {
        return this.$javaClass.SPECTATOR;
    }
    static get SURVIVAL() {
        return this.$javaClass.SURVIVAL;
    }
}
