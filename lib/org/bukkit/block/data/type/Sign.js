"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sign {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Sign');
    }
    static $isInstance(obj) {
        return obj instanceof Sign.$javaClass;
    }
}
exports.default = Sign;
