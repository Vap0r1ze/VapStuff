"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Horse$Style {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Horse$Style');
    }
    static $isInstance(obj) {
        return obj instanceof Horse$Style.$javaClass;
    }
    static get BLACK_DOTS() {
        return this.$javaClass.BLACK_DOTS;
    }
    static get NONE() {
        return this.$javaClass.NONE;
    }
    static get WHITE() {
        return this.$javaClass.WHITE;
    }
    static get WHITEFIELD() {
        return this.$javaClass.WHITEFIELD;
    }
    static get WHITE_DOTS() {
        return this.$javaClass.WHITE_DOTS;
    }
}
exports.default = Horse$Style;
