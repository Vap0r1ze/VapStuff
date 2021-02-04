import LightningStrike from './entity/LightningStrike.js';
import Location from './Location.js';
export default interface World$Spigot {
    strikeLightning(loc: Location, isSilent: boolean): LightningStrike;
    strikeLightningEffect(loc: Location, isSilent: boolean): LightningStrike;
}
export default class World$Spigot {
    static get $javaClass(): any;
    constructor();
}
