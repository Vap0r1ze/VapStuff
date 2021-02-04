import ChunkGenerator from './generator/ChunkGenerator.js';
import CommandSender from './command/CommandSender.js';
import World from './World.js';
import World$Environment from './World$Environment.js';
import WorldType from './WorldType.js';
export default interface WorldCreator {
    copy(creator: WorldCreator): WorldCreator;
    copy(world: World): WorldCreator;
    createWorld(): World;
    environment(): World$Environment;
    environment(env: World$Environment): WorldCreator;
    generateStructures(): boolean;
    generateStructures(generate: boolean): WorldCreator;
    generator(): ChunkGenerator;
    generator(generator: string): WorldCreator;
    generator(generator: ChunkGenerator): WorldCreator;
    generator(generator: string, output: CommandSender): WorldCreator;
    generatorSettings(): string;
    generatorSettings(generatorSettings: string): WorldCreator;
    hardcore(): boolean;
    hardcore(hardcore: boolean): WorldCreator;
    name(): string;
    seed(): number;
    seed(seed: number): WorldCreator;
    type(): WorldType;
    type(type: WorldType): WorldCreator;
}
export default class WorldCreator {
    static get $javaClass(): any;
    constructor(_name: string);
    static getGeneratorForName(world: string, _name: string, output: CommandSender): ChunkGenerator;
    static _name(_name: string): WorldCreator;
}
