export default class Request {
    static get $javaClass() {
        return Java.type('khttp.requests.Request');
    }
}
