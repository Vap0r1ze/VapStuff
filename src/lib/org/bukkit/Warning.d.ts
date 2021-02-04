export default interface Warning {
    annotationType(): any;
    reason(): string;
    value(): boolean;
}
export default class Warning {
    static get $javaClass(): any;
}
