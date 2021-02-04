import Advancement from './Advancement.js';
export default interface AdvancementProgress {
    awardCriteria(arg0: string): boolean;
    getAdvancement(): Advancement;
    getAwardedCriteria(): Array<string>;
    getDateAwarded(arg0: string): any;
    getRemainingCriteria(): Array<string>;
    isDone(): boolean;
    revokeCriteria(arg0: string): boolean;
}
export default class AdvancementProgress {
    static get $javaClass(): any;
}
