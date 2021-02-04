export default class ComponentBuilder {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.ComponentBuilder');
    }
    constructor(...args) {
        return new ComponentBuilder.$javaClass(...args);
    }
}
