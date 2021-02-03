export default class CodingErrorAction {
    static get $javaClass() {
        return Java.type('java.nio.charset.CodingErrorAction');
    }
    static get IGNORE() {
        return CodingErrorAction.$javaClass.IGNORE;
    }
    static get REPLACE() {
        return CodingErrorAction.$javaClass.REPLACE;
    }
    static get REPORT() {
        return CodingErrorAction.$javaClass.REPORT;
    }
}
