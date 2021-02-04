export default class Content {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.hover.content.Content');
    }
    constructor(...args) {
        return new Content.$javaClass(...args);
    }
}
