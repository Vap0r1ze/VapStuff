export default class BlockIgniteEvent$IgniteCause {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockIgniteEvent$IgniteCause');
    }
    static $isInstance(obj) {
        return obj instanceof BlockIgniteEvent$IgniteCause.$javaClass;
    }
    static get ARROW() {
        return this.$javaClass.ARROW;
    }
    static get ENDER_CRYSTAL() {
        return this.$javaClass.ENDER_CRYSTAL;
    }
    static get EXPLOSION() {
        return this.$javaClass.EXPLOSION;
    }
    static get FIREBALL() {
        return this.$javaClass.FIREBALL;
    }
    static get FLINT_AND_STEEL() {
        return this.$javaClass.FLINT_AND_STEEL;
    }
    static get LAVA() {
        return this.$javaClass.LAVA;
    }
    static get LIGHTNING() {
        return this.$javaClass.LIGHTNING;
    }
    static get SPREAD() {
        return this.$javaClass.SPREAD;
    }
}
