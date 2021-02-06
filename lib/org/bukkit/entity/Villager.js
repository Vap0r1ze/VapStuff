export default class Villager {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Villager');
    }
    static $isInstance(obj) {
        return obj instanceof Villager.$javaClass;
    }
}
