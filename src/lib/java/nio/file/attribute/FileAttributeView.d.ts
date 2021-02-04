import AttributeView from './AttributeView.js';
export default interface FileAttributeView extends AttributeView {
    name(): string;
}
export default class FileAttributeView {
    static get $javaClass(): any;
}
