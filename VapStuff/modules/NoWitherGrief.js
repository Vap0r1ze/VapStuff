"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntityType_js_1 = require("../../lib/org/bukkit/entity/EntityType.js");
const EventListener_js_1 = require("../services/EventListener.js");
const Module_js_1 = require("../types/Module.js");
let NoWitherGrief = class NoWitherGrief extends Module_js_1.default {
    get name() { return 'No Wither Grief'; }
    onEntityExplode(listener, event) {
        if (event.getEntityType() !== EntityType_js_1.default.WITHER
            && event.getEntityType() !== EntityType_js_1.default.WITHER_SKULL) {
            return;
        }
        event
            .getEntity()
            .getWorld()
            .createExplosion(event.getLocation(), 0);
        event.setCancelled(true);
    }
};
NoWitherGrief = __decorate([
    EventListener_js_1.Subscribe
], NoWitherGrief);
exports.default = NoWitherGrief;
