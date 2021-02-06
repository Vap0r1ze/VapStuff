export default class Authorization {
    static get $javaClass() {
        return Java.type('khttp.structures.authorization.Authorization');
    }
    static $isInstance(obj) {
        return obj instanceof Authorization.$javaClass;
    }
}
