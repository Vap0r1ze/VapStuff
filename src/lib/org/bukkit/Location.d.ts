import Block from './block/Block.js';
import Chunk from './Chunk.js';
import ConfigurationSerializable from './configuration/serialization/ConfigurationSerializable.js';
import Vector from './util/Vector.js';
import World from './World.js';
export default interface Location extends ConfigurationSerializable {
    add(vec: Location): Location;
    add(vec: Vector): Location;
    add(x: number, y: number, z: number): Location;
    checkFinite(): void;
    clone(): Location;
    clone(): any;
    distance(o: Location): number;
    distanceSquared(o: Location): number;
    getBlock(): Block;
    getBlockX(): number;
    getBlockY(): number;
    getBlockZ(): number;
    getChunk(): Chunk;
    getDirection(): Vector;
    getPitch(): number;
    getWorld(): World;
    getX(): number;
    getY(): number;
    getYaw(): number;
    getZ(): number;
    isWorldLoaded(): boolean;
    length(): number;
    lengthSquared(): number;
    multiply(m: number): Location;
    serialize(): any;
    setDirection(vector: Vector): Location;
    setPitch(pitch: number): void;
    setWorld(world: World): void;
    setX(x: number): void;
    setY(y: number): void;
    setYaw(yaw: number): void;
    setZ(z: number): void;
    subtract(vec: Vector): Location;
    subtract(vec: Location): Location;
    subtract(x: number, y: number, z: number): Location;
    toVector(): Vector;
    zero(): Location;
}
export default class Location {
    static get $javaClass(): any;
    constructor(world: World, x: number, y: number, z: number);
    constructor(world: World, x: number, y: number, z: number, yaw: number, pitch: number);
    static deserialize(args: any): Location;
    static locToBlock(loc: number): number;
    static normalizePitch(pitch: number): number;
    static normalizeYaw(yaw: number): number;
}