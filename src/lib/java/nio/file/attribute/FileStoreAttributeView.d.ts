import AttributeView from './AttributeView.js';
export default interface FileStoreAttributeView extends AttributeView {
    name(): string;
}
export default class FileStoreAttributeView {
    static get $javaClass(): any;
}
