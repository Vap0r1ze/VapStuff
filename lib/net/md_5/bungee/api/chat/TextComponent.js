export default class TextComponent {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.TextComponent');
    }
    constructor(...args) {
        return new TextComponent.$javaClass(...args);
    }
    static fromLegacyText(...args) {
        return TextComponent.$javaClass.fromLegacyText(...args);
    }
    static toLegacyText(...args) {
        return TextComponent.$javaClass.toLegacyText(...args);
    }
    static toPlainText(...args) {
        return TextComponent.$javaClass.toPlainText(...args);
    }
}
