export default class ServerLoadEvent$LoadType {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServerLoadEvent$LoadType');
    }
    static get RELOAD() {
        return this.$javaClass.RELOAD;
    }
    static get STARTUP() {
        return this.$javaClass.STARTUP;
    }
}
