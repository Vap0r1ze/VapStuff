export default interface EulerAngle {
    add(x: number, y: number, z: number): EulerAngle;
    getX(): number;
    getY(): number;
    getZ(): number;
    setX(x: number): EulerAngle;
    setY(y: number): EulerAngle;
    setZ(z: number): EulerAngle;
    subtract(x: number, y: number, z: number): EulerAngle;
}
export default class EulerAngle {
    static get $javaClass(): any;
    constructor(x: number, y: number, z: number);
    static get ZERO(): EulerAngle;
}
