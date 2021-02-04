import Keyed from './Keyed.js';
import NamespacedKey from './NamespacedKey.js';
export default interface Art extends Keyed {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getBlockHeight(): number;
    getBlockWidth(): number;
    getDeclaringClass(): any;
    getId(): number;
    getKey(): NamespacedKey;
    name(): string;
    ordinal(): number;
}
export default class Art {
    static get $javaClass(): any;
    static get ALBAN(): Art;
    static get AZTEC(): Art;
    static get AZTEC2(): Art;
    static get BOMB(): Art;
    static get BURNING_SKULL(): Art;
    static get BUST(): Art;
    static get COURBET(): Art;
    static get CREEBET(): Art;
    static get DONKEY_KONG(): Art;
    static get FIGHTERS(): Art;
    static get GRAHAM(): Art;
    static get KEBAB(): Art;
    static get MATCH(): Art;
    static get PIGSCENE(): Art;
    static get PLANT(): Art;
    static get POINTER(): Art;
    static get POOL(): Art;
    static get SEA(): Art;
    static get SKELETON(): Art;
    static get SKULL_AND_ROSES(): Art;
    static get STAGE(): Art;
    static get SUNSET(): Art;
    static get VOID(): Art;
    static get WANDERER(): Art;
    static get WASTELAND(): Art;
    static get WITHER(): Art;
}
