import NoiseGenerator from './NoiseGenerator.js';
import OctaveGenerator from './OctaveGenerator.js';
import World from '../../../../org/bukkit/World.js';
export default interface SimplexOctaveGenerator extends OctaveGenerator {
    getOctaves(): Array<NoiseGenerator>;
    getWScale(): number;
    getXScale(): number;
    getYScale(): number;
    getZScale(): number;
    noise(x: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, frequency: number, amplitude: number): number;
    noise(x: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, z: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, z: number, w: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, z: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, z: number, w: number, frequency: number, amplitude: number, normalized: boolean): number;
    setScale(scale: number): void;
    setWScale(scale: number): void;
    setXScale(scale: number): void;
    setYScale(scale: number): void;
    setZScale(scale: number): void;
}
export default class SimplexOctaveGenerator {
    static get $javaClass(): any;
    constructor(world: World, octaves: number);
    constructor(seed: number, octaves: number);
    constructor(rand: any, octaves: number);
}
