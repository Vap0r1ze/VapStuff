import PersistentDataContainer from './PersistentDataContainer.js';
export default interface PersistentDataHolder {
    getPersistentDataContainer(): PersistentDataContainer;
}
export default class PersistentDataHolder {
    static get $javaClass(): any;
}
