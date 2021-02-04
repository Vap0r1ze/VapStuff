export default class EnchantmentTarget {
    static get $javaClass() {
        return Java.type('org.bukkit.enchantments.EnchantmentTarget');
    }
    static get ALL() {
        return this.$javaClass.ALL;
    }
    static get ARMOR() {
        return this.$javaClass.ARMOR;
    }
    static get ARMOR_FEET() {
        return this.$javaClass.ARMOR_FEET;
    }
    static get ARMOR_HEAD() {
        return this.$javaClass.ARMOR_HEAD;
    }
    static get ARMOR_LEGS() {
        return this.$javaClass.ARMOR_LEGS;
    }
    static get ARMOR_TORSO() {
        return this.$javaClass.ARMOR_TORSO;
    }
    static get BOW() {
        return this.$javaClass.BOW;
    }
    static get BREAKABLE() {
        return this.$javaClass.BREAKABLE;
    }
    static get CROSSBOW() {
        return this.$javaClass.CROSSBOW;
    }
    static get FISHING_ROD() {
        return this.$javaClass.FISHING_ROD;
    }
    static get TOOL() {
        return this.$javaClass.TOOL;
    }
    static get TRIDENT() {
        return this.$javaClass.TRIDENT;
    }
    static get VANISHABLE() {
        return this.$javaClass.VANISHABLE;
    }
    static get WEAPON() {
        return this.$javaClass.WEAPON;
    }
    static get WEARABLE() {
        return this.$javaClass.WEARABLE;
    }
}
