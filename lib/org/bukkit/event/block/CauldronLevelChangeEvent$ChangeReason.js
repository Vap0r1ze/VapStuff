export default class CauldronLevelChangeEvent$ChangeReason {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.CauldronLevelChangeEvent$ChangeReason');
    }
    static $isInstance(obj) {
        return obj instanceof CauldronLevelChangeEvent$ChangeReason.$javaClass;
    }
    static get ARMOR_WASH() {
        return this.$javaClass.ARMOR_WASH;
    }
    static get BANNER_WASH() {
        return this.$javaClass.BANNER_WASH;
    }
    static get BOTTLE_EMPTY() {
        return this.$javaClass.BOTTLE_EMPTY;
    }
    static get BOTTLE_FILL() {
        return this.$javaClass.BOTTLE_FILL;
    }
    static get BUCKET_EMPTY() {
        return this.$javaClass.BUCKET_EMPTY;
    }
    static get BUCKET_FILL() {
        return this.$javaClass.BUCKET_FILL;
    }
    static get EVAPORATE() {
        return this.$javaClass.EVAPORATE;
    }
    static get EXTINGUISH() {
        return this.$javaClass.EXTINGUISH;
    }
    static get UNKNOWN() {
        return this.$javaClass.UNKNOWN;
    }
}
