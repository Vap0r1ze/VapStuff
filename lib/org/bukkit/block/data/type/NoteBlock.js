export default class NoteBlock {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.NoteBlock');
    }
    static $isInstance(obj) {
        return obj instanceof NoteBlock.$javaClass;
    }
}
