export default class CropState {
    static get $javaClass() {
        return Java.type('org.bukkit.CropState');
    }
    static get GERMINATED() {
        return this.$javaClass.GERMINATED;
    }
    static get MEDIUM() {
        return this.$javaClass.MEDIUM;
    }
    static get RIPE() {
        return this.$javaClass.RIPE;
    }
    static get SEEDED() {
        return this.$javaClass.SEEDED;
    }
    static get SMALL() {
        return this.$javaClass.SMALL;
    }
    static get TALL() {
        return this.$javaClass.TALL;
    }
    static get VERY_SMALL() {
        return this.$javaClass.VERY_SMALL;
    }
    static get VERY_TALL() {
        return this.$javaClass.VERY_TALL;
    }
}