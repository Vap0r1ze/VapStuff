export default class Response {
    static get $javaClass() {
        return Java.type('khttp.responses.Response');
    }
    static $isInstance(obj) {
        return obj instanceof Response.$javaClass;
    }
}
