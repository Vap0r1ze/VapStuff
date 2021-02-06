export default class EndGateway {
    static get $javaClass() {
        return Java.type('org.bukkit.block.EndGateway');
    }
    static $isInstance(obj) {
        return obj instanceof EndGateway.$javaClass;
    }
}
