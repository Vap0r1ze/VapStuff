export default interface NameTagVisibility {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
}
export default class NameTagVisibility {
    static get $javaClass(): any;
    static get ALWAYS(): NameTagVisibility;
    static get HIDE_FOR_OTHER_TEAMS(): NameTagVisibility;
    static get HIDE_FOR_OWN_TEAM(): NameTagVisibility;
    static get NEVER(): NameTagVisibility;
}
