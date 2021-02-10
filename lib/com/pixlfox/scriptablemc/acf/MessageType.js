"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageType {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.MessageType');
    }
    static $isInstance(obj) {
        return obj instanceof MessageType.$javaClass;
    }
    constructor(...args) {
        return new MessageType.$javaClass(...args);
    }
    static get ERROR() {
        return MessageType.$javaClass.ERROR;
    }
    static get HELP() {
        return MessageType.$javaClass.HELP;
    }
    static get INFO() {
        return MessageType.$javaClass.INFO;
    }
    static get SYNTAX() {
        return MessageType.$javaClass.SYNTAX;
    }
}
exports.default = MessageType;
