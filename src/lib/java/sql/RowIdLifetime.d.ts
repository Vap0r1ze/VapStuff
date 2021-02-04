export default interface RowIdLifetime {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
}
export default class RowIdLifetime {
    static get $javaClass(): any;
    static get ROWID_UNSUPPORTED(): RowIdLifetime;
    static get ROWID_VALID_FOREVER(): RowIdLifetime;
    static get ROWID_VALID_OTHER(): RowIdLifetime;
    static get ROWID_VALID_SESSION(): RowIdLifetime;
    static get ROWID_VALID_TRANSACTION(): RowIdLifetime;
}
