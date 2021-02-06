export default class PigZombie {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.PigZombie');
    }
    static $isInstance(obj) {
        return obj instanceof PigZombie.$javaClass;
    }
}
