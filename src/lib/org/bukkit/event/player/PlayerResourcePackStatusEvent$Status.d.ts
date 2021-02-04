export default interface PlayerResourcePackStatusEvent$Status {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
}
export default class PlayerResourcePackStatusEvent$Status {
    static get $javaClass(): any;
    static get ACCEPTED(): PlayerResourcePackStatusEvent$Status;
    static get DECLINED(): PlayerResourcePackStatusEvent$Status;
    static get FAILED_DOWNLOAD(): PlayerResourcePackStatusEvent$Status;
    static get SUCCESSFULLY_LOADED(): PlayerResourcePackStatusEvent$Status;
}
