export default class GrassSpecies {
    static get $javaClass() {
        return Java.type('org.bukkit.GrassSpecies');
    }
    static get DEAD() {
        return this.$javaClass.DEAD;
    }
    static get FERN_LIKE() {
        return this.$javaClass.FERN_LIKE;
    }
    static get NORMAL() {
        return this.$javaClass.NORMAL;
    }
}