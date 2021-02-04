export default interface SlotPos {
    getColumn(): number;
    getRow(): number;
}
export default class SlotPos {
    static get $javaClass(): any;
    constructor(row: number, column: number);
    static of(row: number, column: number): SlotPos;
}
