"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SlotIterator$Type {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.content.SlotIterator$Type');
    }
    static $isInstance(obj) {
        return obj instanceof SlotIterator$Type.$javaClass;
    }
    static get HORIZONTAL() {
        return this.$javaClass.HORIZONTAL;
    }
    static get VERTICAL() {
        return this.$javaClass.VERTICAL;
    }
}
exports.default = SlotIterator$Type;