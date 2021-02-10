"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parameters {
    static get $javaClass() {
        return Java.type('khttp.structures.parameters.Parameters');
    }
    static $isInstance(obj) {
        return obj instanceof Parameters.$javaClass;
    }
    constructor(...args) {
        return new Parameters.$javaClass(...args);
    }
}
exports.default = Parameters;
