export default class MapCursorCollection {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapCursorCollection');
    }
    static $isInstance(obj) {
        return obj instanceof MapCursorCollection.$javaClass;
    }
    constructor(...args) {
        return new MapCursorCollection.$javaClass(...args);
    }
}
