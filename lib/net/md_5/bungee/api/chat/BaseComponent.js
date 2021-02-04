export default class BaseComponent {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.BaseComponent');
    }
    constructor(...args) {
        return new BaseComponent.$javaClass(...args);
    }
    static toLegacyText(...args) {
        return BaseComponent.$javaClass.toLegacyText(...args);
    }
    static toPlainText(...args) {
        return BaseComponent.$javaClass.toPlainText(...args);
    }
}
