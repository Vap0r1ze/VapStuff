export default class KeybindComponent {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.KeybindComponent');
    }
    constructor(...args) {
        return new KeybindComponent.$javaClass(...args);
    }
    static toLegacyText(...args) {
        return KeybindComponent.$javaClass.toLegacyText(...args);
    }
    static toPlainText(...args) {
        return KeybindComponent.$javaClass.toPlainText(...args);
    }
}
