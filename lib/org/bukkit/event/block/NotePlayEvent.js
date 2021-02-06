export default class NotePlayEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.NotePlayEvent');
    }
    static $isInstance(obj) {
        return obj instanceof NotePlayEvent.$javaClass;
    }
    constructor(...args) {
        return new NotePlayEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return NotePlayEvent.$javaClass.getHandlerList(...args);
    }
}
