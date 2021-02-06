export default class MapFont {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapFont');
    }
    static $isInstance(obj) {
        return obj instanceof MapFont.$javaClass;
    }
    constructor(...args) {
        return new MapFont.$javaClass(...args);
    }
}
