"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Keybinds {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.chat.Keybinds');
    }
    static $isInstance(obj) {
        return obj instanceof Keybinds.$javaClass;
    }
    static get ADVANCEMENTS() {
        return Keybinds.$javaClass.ADVANCEMENTS;
    }
    static get ATTACK() {
        return Keybinds.$javaClass.ATTACK;
    }
    static get BACK() {
        return Keybinds.$javaClass.BACK;
    }
    static get CHAT() {
        return Keybinds.$javaClass.CHAT;
    }
    static get COMMAND() {
        return Keybinds.$javaClass.COMMAND;
    }
    static get DROP() {
        return Keybinds.$javaClass.DROP;
    }
    static get FORWARD() {
        return Keybinds.$javaClass.FORWARD;
    }
    static get FULLSCREEN() {
        return Keybinds.$javaClass.FULLSCREEN;
    }
    static get HOTBAR_1() {
        return Keybinds.$javaClass.HOTBAR_1;
    }
    static get HOTBAR_2() {
        return Keybinds.$javaClass.HOTBAR_2;
    }
    static get HOTBAR_3() {
        return Keybinds.$javaClass.HOTBAR_3;
    }
    static get HOTBAR_4() {
        return Keybinds.$javaClass.HOTBAR_4;
    }
    static get HOTBAR_5() {
        return Keybinds.$javaClass.HOTBAR_5;
    }
    static get HOTBAR_6() {
        return Keybinds.$javaClass.HOTBAR_6;
    }
    static get HOTBAR_7() {
        return Keybinds.$javaClass.HOTBAR_7;
    }
    static get HOTBAR_8() {
        return Keybinds.$javaClass.HOTBAR_8;
    }
    static get HOTBAR_9() {
        return Keybinds.$javaClass.HOTBAR_9;
    }
    static get INVENTORY() {
        return Keybinds.$javaClass.INVENTORY;
    }
    static get JUMP() {
        return Keybinds.$javaClass.JUMP;
    }
    static get LEFT() {
        return Keybinds.$javaClass.LEFT;
    }
    static get LOAD_TOOLBAR_ACTIVATOR() {
        return Keybinds.$javaClass.LOAD_TOOLBAR_ACTIVATOR;
    }
    static get PICK_ITEM() {
        return Keybinds.$javaClass.PICK_ITEM;
    }
    static get PLAYERLIST() {
        return Keybinds.$javaClass.PLAYERLIST;
    }
    static get RIGHT() {
        return Keybinds.$javaClass.RIGHT;
    }
    static get SAVE_TOOLBAR_ACTIVATOR() {
        return Keybinds.$javaClass.SAVE_TOOLBAR_ACTIVATOR;
    }
    static get SCREENSHOT() {
        return Keybinds.$javaClass.SCREENSHOT;
    }
    static get SMOOTH_CAMERA() {
        return Keybinds.$javaClass.SMOOTH_CAMERA;
    }
    static get SNEAK() {
        return Keybinds.$javaClass.SNEAK;
    }
    static get SOCIAL_INTERACTIONS() {
        return Keybinds.$javaClass.SOCIAL_INTERACTIONS;
    }
    static get SPECTATOR_OUTLINES() {
        return Keybinds.$javaClass.SPECTATOR_OUTLINES;
    }
    static get SPRINT() {
        return Keybinds.$javaClass.SPRINT;
    }
    static get SWAP_HANDS() {
        return Keybinds.$javaClass.SWAP_HANDS;
    }
    static get TOGGLE_PERSPECTIVE() {
        return Keybinds.$javaClass.TOGGLE_PERSPECTIVE;
    }
    static get USE() {
        return Keybinds.$javaClass.USE;
    }
}
exports.default = Keybinds;
