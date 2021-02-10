"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MapPalette {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapPalette');
    }
    static $isInstance(obj) {
        return obj instanceof MapPalette.$javaClass;
    }
    static get BLUE() {
        return MapPalette.$javaClass.BLUE;
    }
    static get BROWN() {
        return MapPalette.$javaClass.BROWN;
    }
    static get DARK_BROWN() {
        return MapPalette.$javaClass.DARK_BROWN;
    }
    static get DARK_GRAY() {
        return MapPalette.$javaClass.DARK_GRAY;
    }
    static get DARK_GREEN() {
        return MapPalette.$javaClass.DARK_GREEN;
    }
    static get GRAY_1() {
        return MapPalette.$javaClass.GRAY_1;
    }
    static get GRAY_2() {
        return MapPalette.$javaClass.GRAY_2;
    }
    static get LIGHT_BROWN() {
        return MapPalette.$javaClass.LIGHT_BROWN;
    }
    static get LIGHT_GRAY() {
        return MapPalette.$javaClass.LIGHT_GRAY;
    }
    static get LIGHT_GREEN() {
        return MapPalette.$javaClass.LIGHT_GREEN;
    }
    static get PALE_BLUE() {
        return MapPalette.$javaClass.PALE_BLUE;
    }
    static get RED() {
        return MapPalette.$javaClass.RED;
    }
    static get TRANSPARENT() {
        return MapPalette.$javaClass.TRANSPARENT;
    }
    static get WHITE() {
        return MapPalette.$javaClass.WHITE;
    }
    static getColor(...args) {
        return MapPalette.$javaClass.getColor(...args);
    }
    static imageToBytes(...args) {
        return MapPalette.$javaClass.imageToBytes(...args);
    }
    static matchColor(...args) {
        return MapPalette.$javaClass.matchColor(...args);
    }
    static resizeImage(...args) {
        return MapPalette.$javaClass.resizeImage(...args);
    }
}
exports.default = MapPalette;
