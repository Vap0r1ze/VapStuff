import Entity from '../../../org/bukkit/entity/Entity.js';
import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js';
import Location from '../../../org/bukkit/Location.js';
export default interface LootContext {
    getKiller(): HumanEntity;
    getLocation(): Location;
    getLootedEntity(): Entity;
    getLootingModifier(): number;
    getLuck(): number;
}
export default class LootContext {
    static get $javaClass(): any;
    static get DEFAULT_LOOT_MODIFIER(): number;
}
