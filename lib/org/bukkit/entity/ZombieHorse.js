export default class ZombieHorse {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ZombieHorse');
    }
    static $isInstance(obj) {
        return obj instanceof ZombieHorse.$javaClass;
    }
}
