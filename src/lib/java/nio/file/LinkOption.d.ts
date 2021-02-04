import CopyOption from './CopyOption.js';
import OpenOption from './OpenOption.js';
export default interface LinkOption extends OpenOption, CopyOption {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
}
export default class LinkOption {
    static get $javaClass(): any;
    static get NOFOLLOW_LINKS(): LinkOption;
}
