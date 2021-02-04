import Color from './Color.js';
import ConfigurationSerializable from './configuration/serialization/ConfigurationSerializable.js';
import FireworkEffect$Builder from './FireworkEffect$Builder.js';
import FireworkEffect$Type from './FireworkEffect$Type.js';
export default interface FireworkEffect extends ConfigurationSerializable {
    getColors(): Array<Color>;
    getFadeColors(): Array<Color>;
    getType(): FireworkEffect$Type;
    hasFlicker(): boolean;
    hasTrail(): boolean;
    serialize(): any;
}
export default class FireworkEffect {
    static get $javaClass(): any;
    static builder(): FireworkEffect$Builder;
    static deserialize(map: any): ConfigurationSerializable;
}
