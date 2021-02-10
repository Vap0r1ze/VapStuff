"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NetherWarts {
    static get $javaClass() {
        return Java.type('org.bukkit.material.NetherWarts');
    }
    static $isInstance(obj) {
        return obj instanceof NetherWarts.$javaClass;
    }
    constructor(...args) {
        return new NetherWarts.$javaClass(...args);
    }
}
exports.default = NetherWarts;
