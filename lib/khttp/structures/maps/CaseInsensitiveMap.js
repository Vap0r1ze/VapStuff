export default class CaseInsensitiveMap {
    static get $javaClass() {
        return Java.type('khttp.structures.maps.CaseInsensitiveMap');
    }
    static $isInstance(obj) {
        return obj instanceof CaseInsensitiveMap.$javaClass;
    }
    constructor(...args) {
        return new CaseInsensitiveMap.$javaClass(...args);
    }
}
