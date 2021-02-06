export default class SpawnerMinecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.minecart.SpawnerMinecart');
    }
    static $isInstance(obj) {
        return obj instanceof SpawnerMinecart.$javaClass;
    }
}
