export default class Potion {
    static get $javaClass() {
        return Java.type('org.bukkit.potion.Potion');
    }
    static $isInstance(obj) {
        return obj instanceof Potion.$javaClass;
    }
    constructor(...args) {
        return new Potion.$javaClass(...args);
    }
    static fromDamage(...args) {
        return Potion.$javaClass.fromDamage(...args);
    }
    static fromItemStack(...args) {
        return Potion.$javaClass.fromItemStack(...args);
    }
    static getBrewer(...args) {
        return Potion.$javaClass.getBrewer(...args);
    }
    static setPotionBrewer(...args) {
        return Potion.$javaClass.setPotionBrewer(...args);
    }
}
