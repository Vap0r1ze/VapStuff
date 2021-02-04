import Block from '../../../org/bukkit/block/Block.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import Location from '../../../org/bukkit/Location.js';
import RayTraceResult from './RayTraceResult.js';
import Vector from './Vector.js';
export default interface BoundingBox extends ConfigurationSerializable {
    clone(): BoundingBox;
    clone(): any;
    contains(other: BoundingBox): boolean;
    contains(position: Vector): boolean;
    contains(min: Vector, max: Vector): boolean;
    contains(x: number, y: number, z: number): boolean;
    copy(other: BoundingBox): BoundingBox;
    expand(expansion: number): BoundingBox;
    expand(expansion: Vector): BoundingBox;
    expand(direction: Vector, expansion: number): BoundingBox;
    expand(blockFace: BlockFace, expansion: number): BoundingBox;
    expand(x: number, y: number, z: number): BoundingBox;
    expand(dirX: number, dirY: number, dirZ: number, expansion: number): BoundingBox;
    expand(negativeX: number, negativeY: number, negativeZ: number, positiveX: number, positiveY: number, positiveZ: number): BoundingBox;
    expandDirectional(direction: Vector): BoundingBox;
    expandDirectional(dirX: number, dirY: number, dirZ: number): BoundingBox;
    getCenter(): Vector;
    getCenterX(): number;
    getCenterY(): number;
    getCenterZ(): number;
    getHeight(): number;
    getMax(): Vector;
    getMaxX(): number;
    getMaxY(): number;
    getMaxZ(): number;
    getMin(): Vector;
    getMinX(): number;
    getMinY(): number;
    getMinZ(): number;
    getVolume(): number;
    getWidthX(): number;
    getWidthZ(): number;
    intersection(other: BoundingBox): BoundingBox;
    overlaps(other: BoundingBox): boolean;
    overlaps(min: Vector, max: Vector): boolean;
    rayTrace(start: Vector, direction: Vector, maxDistance: number): RayTraceResult;
    resize(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): BoundingBox;
    serialize(): any;
    shift(shift: Vector): BoundingBox;
    shift(shift: Location): BoundingBox;
    shift(shiftX: number, shiftY: number, shiftZ: number): BoundingBox;
    union(position: Vector): BoundingBox;
    union(position: Location): BoundingBox;
    union(other: BoundingBox): BoundingBox;
    union(posX: number, posY: number, posZ: number): BoundingBox;
}
export default class BoundingBox {
    static get $javaClass(): any;
    constructor();
    constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
    static deserialize(args: any): BoundingBox;
    static of(block: Block): BoundingBox;
    static of(corner1: Location, corner2: Location): BoundingBox;
    static of(corner1: Block, corner2: Block): BoundingBox;
    static of(corner1: Vector, corner2: Vector): BoundingBox;
    static of(center: Location, x: number, y: number, z: number): BoundingBox;
    static of(center: Vector, x: number, y: number, z: number): BoundingBox;
}
