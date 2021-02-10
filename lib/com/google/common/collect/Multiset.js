"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Multiset {
    static get $javaClass() {
        return Java.type('com.google.common.collect.Multiset');
    }
    static $isInstance(obj) {
        return obj instanceof Multiset.$javaClass;
    }
}
exports.default = Multiset;
