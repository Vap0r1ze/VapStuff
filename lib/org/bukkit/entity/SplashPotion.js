export default class SplashPotion {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.SplashPotion');
    }
    static $isInstance(obj) {
        return obj instanceof SplashPotion.$javaClass;
    }
}
