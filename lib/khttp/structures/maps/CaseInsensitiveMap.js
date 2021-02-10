"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CaseInsensitiveMap {
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
exports.default = CaseInsensitiveMap;
