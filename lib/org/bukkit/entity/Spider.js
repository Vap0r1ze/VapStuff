"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Spider {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Spider');
    }
    static $isInstance(obj) {
        return obj instanceof Spider.$javaClass;
    }
}
exports.default = Spider;
