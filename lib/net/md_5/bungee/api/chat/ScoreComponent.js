export default class ScoreComponent {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.ScoreComponent');
    }
    static $isInstance(obj) {
        return obj instanceof ScoreComponent.$javaClass;
    }
    constructor(...args) {
        return new ScoreComponent.$javaClass(...args);
    }
    static toLegacyText(...args) {
        return ScoreComponent.$javaClass.toLegacyText(...args);
    }
    static toPlainText(...args) {
        return ScoreComponent.$javaClass.toPlainText(...args);
    }
}
