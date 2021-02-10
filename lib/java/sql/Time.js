"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Time {
    static get $javaClass() {
        return Java.type('java.sql.Time');
    }
    static $isInstance(obj) {
        return obj instanceof Time.$javaClass;
    }
    constructor(...args) {
        return new Time.$javaClass(...args);
    }
    static UTC(...args) {
        return Time.$javaClass.UTC(...args);
    }
    static from(...args) {
        return Time.$javaClass.from(...args);
    }
    static parse(...args) {
        return Time.$javaClass.parse(...args);
    }
    static valueOf(...args) {
        return Time.$javaClass.valueOf(...args);
    }
}
exports.default = Time;
