"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FaceAttachable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.FaceAttachable');
    }
    static $isInstance(obj) {
        return obj instanceof FaceAttachable.$javaClass;
    }
}
exports.default = FaceAttachable;
