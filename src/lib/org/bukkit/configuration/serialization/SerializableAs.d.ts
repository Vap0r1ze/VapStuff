export default interface SerializableAs {
    annotationType(): any;
    value(): string;
}
export default class SerializableAs {
    static get $javaClass(): any;
}
