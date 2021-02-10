"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CaveSpider {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.CaveSpider');
    }
    static $isInstance(obj) {
        return obj instanceof CaveSpider.$javaClass;
    }
}
exports.default = CaveSpider;
