export default class Request {
    static get $javaClass() {
        return Java.type('khttp.requests.Request');
    }
    static $isInstance(obj) {
        return obj instanceof Request.$javaClass;
    }
}
