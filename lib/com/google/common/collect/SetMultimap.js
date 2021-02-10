"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SetMultimap {
    static get $javaClass() {
        return Java.type('com.google.common.collect.SetMultimap');
    }
    static $isInstance(obj) {
        return obj instanceof SetMultimap.$javaClass;
    }
}
exports.default = SetMultimap;
