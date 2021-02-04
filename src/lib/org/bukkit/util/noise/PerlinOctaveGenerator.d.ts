import NoiseGenerator from './NoiseGenerator.js';
import OctaveGenerator from './OctaveGenerator.js';
import World from '../../../../org/bukkit/World.js';
export default interface PerlinOctaveGenerator extends OctaveGenerator {
    getOctaves(): Array<NoiseGenerator>;
    getXScale(): number;
    getYScale(): number;
    getZScale(): number;
    noise(x: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, frequency: number, amplitude: number): number;
    noise(x: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, z: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, z: number, frequency: number, amplitude: number, normalized: boolean): number;
    setScale(scale: number): void;
    setXScale(scale: number): void;
    setYScale(scale: number): void;
    setZScale(scale: number): void;
}
export default class PerlinOctaveGenerator {
    static get $javaClass(): any;
    constructor(world: World, octaves: number);
    constructor(rand: any, octaves: number);
    constructor(seed: number, octaves: number);
}
