"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_js_1 = require("../../lib/org/bukkit/entity/Player.js");
const EventListener_js_1 = require("../services/EventListener.js");
const Module_js_1 = require("../types/Module.js");
let AntiCarter = class AntiCarter extends Module_js_1.default {
    get name() { return 'Anti-Carter'; }
    onEntityDamageByEntity(listener, event) {
        // idk
        if (!('getDamager' in event && 'getEntity' in event))
            return;
        const damager = event.getDamager();
        const victim = event.getEntity();
        if (Player_js_1.default.$isInstance(victim) && Player_js_1.default.$isInstance(damager)) {
            if (damager.getName() === 'Weeb_true' && victim.getName() === 'HamBapVap') {
                event.setCancelled(true);
                this.tellPlayer(damager, 'Nice try pal');
            }
        }
    }
};
AntiCarter = __decorate([
    EventListener_js_1.Subscribe
], AntiCarter);
exports.default = AntiCarter;
