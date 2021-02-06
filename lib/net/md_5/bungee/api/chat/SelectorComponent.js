export default class SelectorComponent {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.SelectorComponent');
    }
    static $isInstance(obj) {
        return obj instanceof SelectorComponent.$javaClass;
    }
    constructor(...args) {
        return new SelectorComponent.$javaClass(...args);
    }
    static toLegacyText(...args) {
        return SelectorComponent.$javaClass.toLegacyText(...args);
    }
    static toPlainText(...args) {
        return SelectorComponent.$javaClass.toPlainText(...args);
    }
}
