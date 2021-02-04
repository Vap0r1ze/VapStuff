export default interface SoundCategory {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
}
export default class SoundCategory {
    static get $javaClass(): any;
    static get AMBIENT(): SoundCategory;
    static get BLOCKS(): SoundCategory;
    static get HOSTILE(): SoundCategory;
    static get MASTER(): SoundCategory;
    static get MUSIC(): SoundCategory;
    static get NEUTRAL(): SoundCategory;
    static get PLAYERS(): SoundCategory;
    static get RECORDS(): SoundCategory;
    static get VOICE(): SoundCategory;
    static get WEATHER(): SoundCategory;
}
