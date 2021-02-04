export default interface BanEntry {
    getCreated(): any;
    getExpiration(): any;
    getReason(): string;
    getSource(): string;
    getTarget(): string;
    save(): void;
    setCreated(arg0: any): void;
    setExpiration(arg0: any): void;
    setReason(arg0: string): void;
    setSource(arg0: string): void;
}
export default class BanEntry {
    static get $javaClass(): any;
}
