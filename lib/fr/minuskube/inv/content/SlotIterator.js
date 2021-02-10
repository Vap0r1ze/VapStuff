"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SlotIterator {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.content.SlotIterator');
    }
    static $isInstance(obj) {
        return obj instanceof SlotIterator.$javaClass;
    }
}
exports.default = SlotIterator;
