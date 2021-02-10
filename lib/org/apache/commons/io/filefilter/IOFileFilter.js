"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IOFileFilter {
    static get $javaClass() {
        return Java.type('org.apache.commons.io.filefilter.IOFileFilter');
    }
    static $isInstance(obj) {
        return obj instanceof IOFileFilter.$javaClass;
    }
}
exports.default = IOFileFilter;
