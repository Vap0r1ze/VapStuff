"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InterruptibleChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.InterruptibleChannel');
    }
    static $isInstance(obj) {
        return obj instanceof InterruptibleChannel.$javaClass;
    }
}
exports.default = InterruptibleChannel;
