import CustomItemTagContainer from './CustomItemTagContainer.js';
export default interface ItemTagAdapterContext {
    newTagContainer(): CustomItemTagContainer;
}
export default class ItemTagAdapterContext {
    static get $javaClass(): any;
}
