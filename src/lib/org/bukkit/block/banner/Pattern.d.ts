import ConfigurationSerializable from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import DyeColor from '../../../../org/bukkit/DyeColor.js';
import PatternType from './PatternType.js';
export default interface Pattern extends ConfigurationSerializable {
    getColor(): DyeColor;
    getPattern(): PatternType;
    serialize(): any;
}
export default class Pattern {
    static get $javaClass(): any;
    constructor(map: any);
    constructor(color: DyeColor, pattern: PatternType);
}
