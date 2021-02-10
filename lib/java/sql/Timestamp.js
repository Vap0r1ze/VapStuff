"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Timestamp {
    static get $javaClass() {
        return Java.type('java.sql.Timestamp');
    }
    static $isInstance(obj) {
        return obj instanceof Timestamp.$javaClass;
    }
    constructor(...args) {
        return new Timestamp.$javaClass(...args);
    }
    static UTC(...args) {
        return Timestamp.$javaClass.UTC(...args);
    }
    static from(...args) {
        return Timestamp.$javaClass.from(...args);
    }
    static parse(...args) {
        return Timestamp.$javaClass.parse(...args);
    }
    static valueOf(...args) {
        return Timestamp.$javaClass.valueOf(...args);
    }
}
exports.default = Timestamp;
