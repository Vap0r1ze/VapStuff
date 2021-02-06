export default class CustomItemTagContainer {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.tags.CustomItemTagContainer');
    }
    static $isInstance(obj) {
        return obj instanceof CustomItemTagContainer.$javaClass;
    }
}
