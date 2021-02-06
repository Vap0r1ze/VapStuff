export default class Effect$Type {
    static get $javaClass() {
        return Java.type('org.bukkit.Effect$Type');
    }
    static $isInstance(obj) {
        return obj instanceof Effect$Type.$javaClass;
    }
    static get SOUND() {
        return this.$javaClass.SOUND;
    }
    static get VISUAL() {
        return this.$javaClass.VISUAL;
    }
}
