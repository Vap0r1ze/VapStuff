"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractInterruptibleChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.spi.AbstractInterruptibleChannel');
    }
    static $isInstance(obj) {
        return obj instanceof AbstractInterruptibleChannel.$javaClass;
    }
}
exports.default = AbstractInterruptibleChannel;
