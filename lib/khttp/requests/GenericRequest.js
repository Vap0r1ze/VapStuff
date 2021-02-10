"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericRequest {
    static get $javaClass() {
        return Java.type('khttp.requests.GenericRequest');
    }
    static $isInstance(obj) {
        return obj instanceof GenericRequest.$javaClass;
    }
    constructor(...args) {
        return new GenericRequest.$javaClass(...args);
    }
    static access$getDEFAULT_DATA_HEADERS$cp(...args) {
        return GenericRequest.$javaClass.access$getDEFAULT_DATA_HEADERS$cp(...args);
    }
    static access$getDEFAULT_FORM_HEADERS$cp(...args) {
        return GenericRequest.$javaClass.access$getDEFAULT_FORM_HEADERS$cp(...args);
    }
    static access$getDEFAULT_HEADERS$cp(...args) {
        return GenericRequest.$javaClass.access$getDEFAULT_HEADERS$cp(...args);
    }
    static access$getDEFAULT_JSON_HEADERS$cp(...args) {
        return GenericRequest.$javaClass.access$getDEFAULT_JSON_HEADERS$cp(...args);
    }
    static access$getDEFAULT_UPLOAD_HEADERS$cp(...args) {
        return GenericRequest.$javaClass.access$getDEFAULT_UPLOAD_HEADERS$cp(...args);
    }
}
exports.default = GenericRequest;
