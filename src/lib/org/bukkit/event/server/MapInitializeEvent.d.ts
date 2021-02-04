import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import MapView from '../../../../org/bukkit/map/MapView.js';
import ServerEvent from './ServerEvent.js';
export default interface MapInitializeEvent extends ServerEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getMap(): MapView;
    isAsynchronous(): boolean;
}
export default class MapInitializeEvent {
    static get $javaClass(): any;
    constructor(mapView: MapView);
    static getHandlerList(): HandlerList;
}
