import PrintStream from '../../../java/io/PrintStream.js';
import PrintWriter from '../../../java/io/PrintWriter.js';
export default interface UnknownDependencyException {
    addSuppressed(arg0: any): void;
    fillInStackTrace(): any;
    getCause(): any;
    getLocalizedMessage(): string;
    getMessage(): string;
    getStackTrace(): Array<any>;
    getSuppressed(): Array<any>;
    initCause(arg0: any): any;
    printStackTrace(): void;
    printStackTrace(arg0: PrintStream): void;
    printStackTrace(arg0: PrintWriter): void;
    setStackTrace(arg0: Array<any>): void;
}
export default class UnknownDependencyException {
    static get $javaClass(): any;
    constructor();
    constructor(message: string);
    constructor(throwable: any);
    constructor(throwable: any, message: string);
}
