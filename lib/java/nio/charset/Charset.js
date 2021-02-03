export default class Charset {
    static get $javaClass() {
        return Java.type('java.nio.charset.Charset');
    }
    static availableCharsets(...args) {
        return Charset.$javaClass.availableCharsets(...args);
    }
    static defaultCharset(...args) {
        return Charset.$javaClass.defaultCharset(...args);
    }
    static forName(...args) {
        return Charset.$javaClass.forName(...args);
    }
    static isSupported(...args) {
        return Charset.$javaClass.isSupported(...args);
    }
}
