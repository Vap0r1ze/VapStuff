export default class Lootable {
    static get $javaClass() {
        return Java.type('org.bukkit.loot.Lootable');
    }
    static $isInstance(obj) {
        return obj instanceof Lootable.$javaClass;
    }
}
