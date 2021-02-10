"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityCategory {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.EntityCategory');
    }
    static $isInstance(obj) {
        return obj instanceof EntityCategory.$javaClass;
    }
    static get ARTHROPOD() {
        return this.$javaClass.ARTHROPOD;
    }
    static get ILLAGER() {
        return this.$javaClass.ILLAGER;
    }
    static get NONE() {
        return this.$javaClass.NONE;
    }
    static get UNDEAD() {
        return this.$javaClass.UNDEAD;
    }
    static get WATER() {
        return this.$javaClass.WATER;
    }
}
exports.default = EntityCategory;
