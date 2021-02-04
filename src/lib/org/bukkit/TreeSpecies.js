export default class TreeSpecies {
    static get $javaClass() {
        return Java.type('org.bukkit.TreeSpecies');
    }
    static get ACACIA() {
        return this.$javaClass.ACACIA;
    }
    static get BIRCH() {
        return this.$javaClass.BIRCH;
    }
    static get DARK_OAK() {
        return this.$javaClass.DARK_OAK;
    }
    static get GENERIC() {
        return this.$javaClass.GENERIC;
    }
    static get JUNGLE() {
        return this.$javaClass.JUNGLE;
    }
    static get REDWOOD() {
        return this.$javaClass.REDWOOD;
    }
}
