"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WanderingTrader {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.WanderingTrader');
    }
    static $isInstance(obj) {
        return obj instanceof WanderingTrader.$javaClass;
    }
}
exports.default = WanderingTrader;
