"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GatheringByteChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.GatheringByteChannel');
    }
    static $isInstance(obj) {
        return obj instanceof GatheringByteChannel.$javaClass;
    }
}
exports.default = GatheringByteChannel;
