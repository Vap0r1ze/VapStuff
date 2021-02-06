export default class PlayerTeleportEvent$TeleportCause {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerTeleportEvent$TeleportCause');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerTeleportEvent$TeleportCause.$javaClass;
    }
    static get CHORUS_FRUIT() {
        return this.$javaClass.CHORUS_FRUIT;
    }
    static get COMMAND() {
        return this.$javaClass.COMMAND;
    }
    static get ENDER_PEARL() {
        return this.$javaClass.ENDER_PEARL;
    }
    static get END_GATEWAY() {
        return this.$javaClass.END_GATEWAY;
    }
    static get END_PORTAL() {
        return this.$javaClass.END_PORTAL;
    }
    static get NETHER_PORTAL() {
        return this.$javaClass.NETHER_PORTAL;
    }
    static get PLUGIN() {
        return this.$javaClass.PLUGIN;
    }
    static get SPECTATE() {
        return this.$javaClass.SPECTATE;
    }
    static get UNKNOWN() {
        return this.$javaClass.UNKNOWN;
    }
}
