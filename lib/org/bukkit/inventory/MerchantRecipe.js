export default class MerchantRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.MerchantRecipe');
    }
    static $isInstance(obj) {
        return obj instanceof MerchantRecipe.$javaClass;
    }
    constructor(...args) {
        return new MerchantRecipe.$javaClass(...args);
    }
}
