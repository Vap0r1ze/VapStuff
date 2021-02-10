"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeWords = exports.capitalize = exports.colorText = exports.hexChatColor = exports.Array2D = void 0;
function Array2D(w = 0, h = 0) {
    const arr2d = new Array(h);
    for (let i = 0; i < h; i += 1) {
        arr2d[i] = new Array(w);
    }
    return arr2d;
}
exports.Array2D = Array2D;
function hexChatColor(hex) {
    return `\xA7x${[...hex].map(c => `\xA7${c}`).join('')}`;
}
exports.hexChatColor = hexChatColor;
function colorText(text) {
    return text
        .replace(/&([0-9a-fklmnor])/g, '\xA7$1')
        .replace(/&#([0-9a-f]{6})/gi, (match, hex) => hexChatColor(hex))
        .replace(/&&/g, '&');
}
exports.colorText = colorText;
function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}
exports.capitalize = capitalize;
function capitalizeWords(words) {
    return words.split(' ').map(w => capitalize(w)).join(' ');
}
exports.capitalizeWords = capitalizeWords;
