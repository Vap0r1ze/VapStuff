export default interface Lockable {
    getLock(): string;
    isLocked(): boolean;
    setLock(arg0: string): void;
}
export default class Lockable {
    static get $javaClass(): any;
}
