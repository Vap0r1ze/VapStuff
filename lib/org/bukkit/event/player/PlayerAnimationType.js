export default class PlayerAnimationType {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerAnimationType');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerAnimationType.$javaClass;
    }
    static get ARM_SWING() {
        return this.$javaClass.ARM_SWING;
    }
}
