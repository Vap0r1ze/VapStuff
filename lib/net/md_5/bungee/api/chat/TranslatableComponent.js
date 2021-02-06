export default class TranslatableComponent {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.TranslatableComponent');
    }
    static $isInstance(obj) {
        return obj instanceof TranslatableComponent.$javaClass;
    }
    constructor(...args) {
        return new TranslatableComponent.$javaClass(...args);
    }
    static toLegacyText(...args) {
        return TranslatableComponent.$javaClass.toLegacyText(...args);
    }
    static toPlainText(...args) {
        return TranslatableComponent.$javaClass.toPlainText(...args);
    }
}
