export default interface EventPriority {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    getSlot(): number;
    name(): string;
    ordinal(): number;
}
export default class EventPriority {
    static get $javaClass(): any;
    static get HIGH(): EventPriority;
    static get HIGHEST(): EventPriority;
    static get LOW(): EventPriority;
    static get LOWEST(): EventPriority;
    static get MONITOR(): EventPriority;
    static get NORMAL(): EventPriority;
}
