export default class MapFont$CharacterSprite {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapFont$CharacterSprite');
    }
    static $isInstance(obj) {
        return obj instanceof MapFont$CharacterSprite.$javaClass;
    }
    constructor(...args) {
        return new MapFont$CharacterSprite.$javaClass(...args);
    }
}
