export default class CreatureSpawner {
    static get $javaClass() {
        return Java.type('org.bukkit.block.CreatureSpawner');
    }
    static $isInstance(obj) {
        return obj instanceof CreatureSpawner.$javaClass;
    }
}
