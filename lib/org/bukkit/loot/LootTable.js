export default class LootTable {
    static get $javaClass() {
        return Java.type('org.bukkit.loot.LootTable');
    }
    static $isInstance(obj) {
        return obj instanceof LootTable.$javaClass;
    }
}
