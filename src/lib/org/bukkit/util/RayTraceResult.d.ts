import Block from '../../../org/bukkit/block/Block.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Entity from '../../../org/bukkit/entity/Entity.js';
import Vector from './Vector.js';
export default interface RayTraceResult {
    getHitBlock(): Block;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getHitPosition(): Vector;
}
export default class RayTraceResult {
    static get $javaClass(): any;
    constructor(hitPosition: Vector);
    constructor(hitPosition: Vector, hitBlockFace: BlockFace);
    constructor(hitPosition: Vector, hitEntity: Entity);
    constructor(hitPosition: Vector, hitEntity: Entity, hitBlockFace: BlockFace);
    constructor(hitPosition: Vector, hitBlock: Block, hitBlockFace: BlockFace);
}
