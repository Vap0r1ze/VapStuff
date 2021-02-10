"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Multimap {
    static get $javaClass() {
        return Java.type('com.google.common.collect.Multimap');
    }
    static $isInstance(obj) {
        return obj instanceof Multimap.$javaClass;
    }
}
exports.default = Multimap;
