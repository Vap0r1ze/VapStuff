import MapCursor$Type from './MapCursor$Type.js';
export default interface MapCursor {
    getCaption(): string;
    getDirection(): number;
    getRawType(): number;
    getType(): MapCursor$Type;
    getX(): number;
    getY(): number;
    isVisible(): boolean;
    setCaption(caption: string): void;
    setDirection(direction: number): void;
    setRawType(type: number): void;
    setType(type: MapCursor$Type): void;
    setVisible(visible: boolean): void;
    setX(x: number): void;
    setY(y: number): void;
}
export default class MapCursor {
    static get $javaClass(): any;
    constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean);
    constructor(x: number, y: number, direction: number, type: number, visible: boolean);
    constructor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string);
    constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean, caption: string);
}
