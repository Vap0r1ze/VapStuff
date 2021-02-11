"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Module_js_1 = require("../types/Module.js");
class Hints extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.hintsShown = new Map();
    }
    get name() { return 'Hints'; }
    onEnable() {
        for (let i = 0; i < 4 /* MAX_HINT */; i += 1) {
            this.hintsShown.set(i, []);
        }
    }
    handleHint(player, hint, handler, childHints) {
        const shownTo = this.hintsShown.get(hint);
        const uuid = player.getUniqueId();
        if (!shownTo.includes(uuid)) {
            shownTo.push(uuid);
            if (childHints) {
                childHints.forEach(childHint => {
                    const childShownTo = this.hintsShown.get(childHint);
                    if (!childShownTo.includes(uuid))
                        childShownTo.push(uuid);
                });
            }
            handler();
        }
    }
    handleHintArea(area, radius, hint, handler, childHints) {
        const players = Array.from(this.plugin.server.getOnlinePlayers())
            .filter(player => player.getWorld() === area.getWorld()
            && player.getLocation().distanceSquared(area) < radius ** 2);
        players.forEach(player => {
            this.handleHint(player, hint, () => { handler(player); }, childHints);
        });
    }
}
exports.default = Hints;
