export default class LineIterator {
    static get $javaClass() {
        return Java.type('org.apache.commons.io.LineIterator');
    }
    constructor(...args) {
        return new LineIterator.$javaClass(...args);
    }
    static closeQuietly(...args) {
        return LineIterator.$javaClass.closeQuietly(...args);
    }
}
