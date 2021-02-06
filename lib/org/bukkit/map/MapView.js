export default class MapView {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapView');
    }
    static $isInstance(obj) {
        return obj instanceof MapView.$javaClass;
    }
}
