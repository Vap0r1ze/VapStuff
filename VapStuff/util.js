"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeltasFromTaxicabRadius = exports.deserializeLocation = exports.serializeLocation = exports.capitalizeWords = exports.capitalize = exports.colorStrip = exports.colorText = exports.hexChatColor = exports.Array2D = void 0;
const Location_js_1 = require("../lib/org/bukkit/Location.js");
// Data Structure
function Array2D(w = 0, h = 0) {
    const arr2d = new Array(h);
    for (let i = 0; i < h; i += 1) {
        arr2d[i] = new Array(w);
    }
    return arr2d;
}
exports.Array2D = Array2D;
// Text
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
function colorStrip(text) {
    return text
        .replace(/\xA7{2}/g, '\x00')
        .replace(/\xA7x(\xA7[0-9a-f]){6}/gi, '')
        .replace(/\xA7([0-9a-fklmnor])/gi, '')
        // eslint-disable-next-line no-control-regex
        .replace(/\x00/g, '\xA7');
}
exports.colorStrip = colorStrip;
function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}
exports.capitalize = capitalize;
function capitalizeWords(words) {
    return words.split(' ').map(w => capitalize(w)).join(' ');
}
exports.capitalizeWords = capitalizeWords;
function serializeLocation(where) {
    return `${where.getWorld().getName()},${where.getBlockX()},${where.getBlockY()},${where.getBlockZ()}`;
}
exports.serializeLocation = serializeLocation;
function deserializeLocation(whereStr, server) {
    const [worldName, x, y, z] = whereStr.split(',');
    const world = server.getWorld(worldName);
    return new Location_js_1.default(world, +x, +y, +z);
}
exports.deserializeLocation = deserializeLocation;
function getDeltasFromTaxicabRadius(radius) {
    const deltas = [];
    for (let dy = -radius; dy <= radius; dy += 1) {
        const layerRadius = radius - Math.abs(dy);
        for (let dz = -layerRadius; dz <= layerRadius; dz += 1) {
            for (let dx = Math.abs(dz) - layerRadius; dx <= layerRadius - Math.abs(dz); dx += 1) {
                deltas.push([dx, dy, dz]);
            }
        }
    }
    return deltas;
}
exports.getDeltasFromTaxicabRadius = getDeltasFromTaxicabRadius;
