"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageFormatter {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.MessageFormatter');
    }
    static $isInstance(obj) {
        return obj instanceof MessageFormatter.$javaClass;
    }
    constructor(...args) {
        return new MessageFormatter.$javaClass(...args);
    }
}
exports.default = MessageFormatter;
