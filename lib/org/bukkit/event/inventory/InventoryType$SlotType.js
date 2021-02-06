export default class InventoryType$SlotType {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryType$SlotType');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryType$SlotType.$javaClass;
    }
    static get ARMOR() {
        return this.$javaClass.ARMOR;
    }
    static get CONTAINER() {
        return this.$javaClass.CONTAINER;
    }
    static get CRAFTING() {
        return this.$javaClass.CRAFTING;
    }
    static get FUEL() {
        return this.$javaClass.FUEL;
    }
    static get OUTSIDE() {
        return this.$javaClass.OUTSIDE;
    }
    static get QUICKBAR() {
        return this.$javaClass.QUICKBAR;
    }
    static get RESULT() {
        return this.$javaClass.RESULT;
    }
}
