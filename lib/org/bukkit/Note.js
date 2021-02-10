"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Note {
    static get $javaClass() {
        return Java.type('org.bukkit.Note');
    }
    static $isInstance(obj) {
        return obj instanceof Note.$javaClass;
    }
    constructor(...args) {
        return new Note.$javaClass(...args);
    }
    static flat(...args) {
        return Note.$javaClass.flat(...args);
    }
    static natural(...args) {
        return Note.$javaClass.natural(...args);
    }
    static sharp(...args) {
        return Note.$javaClass.sharp(...args);
    }
}
exports.default = Note;
