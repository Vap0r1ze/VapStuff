export default interface CompletionHandler {
    completed(arg0: any, arg1: any): void;
    failed(arg0: any, arg1: any): void;
}
export default class CompletionHandler {
    static get $javaClass(): any;
}
