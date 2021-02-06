export default class CoderResult {
    static get $javaClass() {
        return Java.type('java.nio.charset.CoderResult');
    }
    static $isInstance(obj) {
        return obj instanceof CoderResult.$javaClass;
    }
    static get OVERFLOW() {
        return CoderResult.$javaClass.OVERFLOW;
    }
    static get UNDERFLOW() {
        return CoderResult.$javaClass.UNDERFLOW;
    }
    static malformedForLength(...args) {
        return CoderResult.$javaClass.malformedForLength(...args);
    }
    static unmappableForLength(...args) {
        return CoderResult.$javaClass.unmappableForLength(...args);
    }
}
