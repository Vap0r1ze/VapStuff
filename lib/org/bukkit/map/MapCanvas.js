export default class MapCanvas {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapCanvas');
    }
    static $isInstance(obj) {
        return obj instanceof MapCanvas.$javaClass;
    }
}
