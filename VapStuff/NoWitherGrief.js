var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import EntityType from '../lib/org/bukkit/entity/EntityType.js';
import { Subscribe } from './EventListener.js';
import Module from './Module.js';
let NoWitherGrief = class NoWitherGrief extends Module {
    onEntityExplode(listener, event) {
        if (event.getEntityType() !== EntityType.WITHER &&
            event.getEntityType() !== EntityType.WITHER_SKULL)
            return;
        if (event
            .getEntity()
            .getWorld()
            .getName() !== 'world')
            return;
        event
            .getEntity()
            .getWorld()
            .createExplosion(event.getLocation(), 0);
        event.setCancelled(true);
    }
};
NoWitherGrief = __decorate([
    Subscribe
], NoWitherGrief);
export default NoWitherGrief;
