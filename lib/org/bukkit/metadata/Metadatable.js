export default class Metadatable {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.Metadatable');
    }
    static $isInstance(obj) {
        return obj instanceof Metadatable.$javaClass;
    }
}
