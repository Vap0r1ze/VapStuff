import Block from '../../../org/bukkit/block/Block.js';
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js';
import Location from '../../../org/bukkit/Location.js';
import Vector from './Vector.js';
import World from '../../../org/bukkit/World.js';
export default interface BlockIterator {
    forEachRemaining(arg0: any): void;
    hasNext(): boolean;
    next(): any;
    next(): Block;
    remove(): void;
}
export default class BlockIterator {
    static get $javaClass(): any;
    constructor(loc: Location);
    constructor(entity: LivingEntity);
    constructor(entity: LivingEntity, maxDistance: number);
    constructor(loc: Location, yOffset: number);
    constructor(loc: Location, yOffset: number, maxDistance: number);
    constructor(world: World, start: Vector, direction: Vector, yOffset: number, maxDistance: number);
}
