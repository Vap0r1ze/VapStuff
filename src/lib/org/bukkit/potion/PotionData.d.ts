import PotionType from './PotionType.js';
export default interface PotionData {
    getType(): PotionType;
    isExtended(): boolean;
    isUpgraded(): boolean;
}
export default class PotionData {
    static get $javaClass(): any;
    constructor(type: PotionType);
    constructor(type: PotionType, extended: boolean, upgraded: boolean);
}
