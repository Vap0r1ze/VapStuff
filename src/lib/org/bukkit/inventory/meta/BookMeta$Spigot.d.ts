import BaseComponent from '../../../../net/md_5/bungee/api/chat/BaseComponent.js';
export default interface BookMeta$Spigot {
    addPage(pages: Array<Array<BaseComponent>>): void;
    getPage(page: number): Array<BaseComponent>;
    getPages(): Array<Array<BaseComponent>>;
    setPage(page: number, data: Array<BaseComponent>): void;
    setPages(pages: Array<Array<BaseComponent>>): void;
    setPages(pages: Array<any>): void;
}
export default class BookMeta$Spigot {
    static get $javaClass(): any;
    constructor();
}
