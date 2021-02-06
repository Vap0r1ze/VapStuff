export default class FilterOutputStream {
    static get $javaClass() {
        return Java.type('java.io.FilterOutputStream');
    }
    static $isInstance(obj) {
        return obj instanceof FilterOutputStream.$javaClass;
    }
    constructor(...args) {
        return new FilterOutputStream.$javaClass(...args);
    }
}
