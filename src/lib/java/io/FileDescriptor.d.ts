export default interface FileDescriptor {
    sync(): void;
    valid(): boolean;
}
export default class FileDescriptor {
    static get $javaClass(): any;
    constructor();
    static get err(): FileDescriptor;
    static get _in(): FileDescriptor;
    static get out(): FileDescriptor;
}
