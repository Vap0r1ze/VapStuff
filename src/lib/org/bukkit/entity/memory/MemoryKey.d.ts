import Keyed from '../../../../org/bukkit/Keyed.js';
import NamespacedKey from '../../../../org/bukkit/NamespacedKey.js';
export default interface MemoryKey extends Keyed {
    getKey(): NamespacedKey;
    getMemoryClass(): any;
}
export default class MemoryKey {
    static get $javaClass(): any;
    static get ADMIRING_DISABLED(): MemoryKey;
    static get ADMIRING_ITEM(): MemoryKey;
    static get ANGRY_AT(): MemoryKey;
    static get HOME(): MemoryKey;
    static get HUNTED_RECENTLY(): MemoryKey;
    static get JOB_SITE(): MemoryKey;
    static get LAST_SLEPT(): MemoryKey;
    static get LAST_WOKEN(): MemoryKey;
    static get LAST_WORKED_AT_POI(): MemoryKey;
    static get MEETING_POINT(): MemoryKey;
    static get POTENTIAL_JOB_SITE(): MemoryKey;
    static get UNIVERSAL_ANGER(): MemoryKey;
    static getByKey(namespacedKey: NamespacedKey): MemoryKey;
    static values(): any;
}
