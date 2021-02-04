export default class UsageMode {
    static get $javaClass() {
        return Java.type('org.bukkit.block.structure.UsageMode');
    }
    static get CORNER() {
        return this.$javaClass.CORNER;
    }
    static get DATA() {
        return this.$javaClass.DATA;
    }
    static get LOAD() {
        return this.$javaClass.LOAD;
    }
    static get SAVE() {
        return this.$javaClass.SAVE;
    }
}
