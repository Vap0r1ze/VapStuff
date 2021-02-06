export default class AnimalTamer {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.AnimalTamer');
    }
    static $isInstance(obj) {
        return obj instanceof AnimalTamer.$javaClass;
    }
}
