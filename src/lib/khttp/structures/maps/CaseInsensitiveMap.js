export default class CaseInsensitiveMap {
    static get $javaClass() {
        return Java.type('khttp.structures.maps.CaseInsensitiveMap');
    }
    constructor(...args) {
        return new CaseInsensitiveMap.$javaClass(...args);
    }
}
