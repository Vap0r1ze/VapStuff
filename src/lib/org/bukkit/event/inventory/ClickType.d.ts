export default interface ClickType {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    isCreativeAction(): boolean;
    isKeyboardClick(): boolean;
    isLeftClick(): boolean;
    isRightClick(): boolean;
    isShiftClick(): boolean;
    name(): string;
    ordinal(): number;
}
export default class ClickType {
    static get $javaClass(): any;
    static get CONTROL_DROP(): ClickType;
    static get CREATIVE(): ClickType;
    static get DOUBLE_CLICK(): ClickType;
    static get DROP(): ClickType;
    static get LEFT(): ClickType;
    static get MIDDLE(): ClickType;
    static get NUMBER_KEY(): ClickType;
    static get RIGHT(): ClickType;
    static get SHIFT_LEFT(): ClickType;
    static get SHIFT_RIGHT(): ClickType;
    static get SWAP_OFFHAND(): ClickType;
    static get UNKNOWN(): ClickType;
    static get WINDOW_BORDER_LEFT(): ClickType;
    static get WINDOW_BORDER_RIGHT(): ClickType;
}
