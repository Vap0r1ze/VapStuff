"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WatchService {
    static get $javaClass() {
        return Java.type('java.nio.file.WatchService');
    }
    static $isInstance(obj) {
        return obj instanceof WatchService.$javaClass;
    }
}
exports.default = WatchService;
