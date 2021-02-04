export default class HoverEvent {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.HoverEvent');
    }
    constructor(...args) {
        return new HoverEvent.$javaClass(...args);
    }
}
