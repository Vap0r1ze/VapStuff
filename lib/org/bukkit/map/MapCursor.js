export default class MapCursor {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapCursor');
    }
    static $isInstance(obj) {
        return obj instanceof MapCursor.$javaClass;
    }
    constructor(...args) {
        return new MapCursor.$javaClass(...args);
    }
}
