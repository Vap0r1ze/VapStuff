export default interface Rotation {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
    rotateClockwise(): Rotation;
    rotateCounterClockwise(): Rotation;
}
export default class Rotation {
    static get $javaClass(): any;
    static get CLOCKWISE(): Rotation;
    static get CLOCKWISE_135(): Rotation;
    static get CLOCKWISE_45(): Rotation;
    static get COUNTER_CLOCKWISE(): Rotation;
    static get COUNTER_CLOCKWISE_45(): Rotation;
    static get FLIPPED(): Rotation;
    static get FLIPPED_45(): Rotation;
    static get NONE(): Rotation;
}
