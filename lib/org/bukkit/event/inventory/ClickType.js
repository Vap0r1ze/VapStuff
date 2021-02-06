export default class ClickType {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.ClickType');
    }
    static $isInstance(obj) {
        return obj instanceof ClickType.$javaClass;
    }
    static get CONTROL_DROP() {
        return this.$javaClass.CONTROL_DROP;
    }
    static get CREATIVE() {
        return this.$javaClass.CREATIVE;
    }
    static get DOUBLE_CLICK() {
        return this.$javaClass.DOUBLE_CLICK;
    }
    static get DROP() {
        return this.$javaClass.DROP;
    }
    static get LEFT() {
        return this.$javaClass.LEFT;
    }
    static get MIDDLE() {
        return this.$javaClass.MIDDLE;
    }
    static get NUMBER_KEY() {
        return this.$javaClass.NUMBER_KEY;
    }
    static get RIGHT() {
        return this.$javaClass.RIGHT;
    }
    static get SHIFT_LEFT() {
        return this.$javaClass.SHIFT_LEFT;
    }
    static get SHIFT_RIGHT() {
        return this.$javaClass.SHIFT_RIGHT;
    }
    static get SWAP_OFFHAND() {
        return this.$javaClass.SWAP_OFFHAND;
    }
    static get UNKNOWN() {
        return this.$javaClass.UNKNOWN;
    }
    static get WINDOW_BORDER_LEFT() {
        return this.$javaClass.WINDOW_BORDER_LEFT;
    }
    static get WINDOW_BORDER_RIGHT() {
        return this.$javaClass.WINDOW_BORDER_RIGHT;
    }
}
