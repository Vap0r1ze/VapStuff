"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bisected$Half {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Bisected$Half');
    }
    static $isInstance(obj) {
        return obj instanceof Bisected$Half.$javaClass;
    }
    static get BOTTOM() {
        return this.$javaClass.BOTTOM;
    }
    static get TOP() {
        return this.$javaClass.TOP;
    }
}
exports.default = Bisected$Half;
