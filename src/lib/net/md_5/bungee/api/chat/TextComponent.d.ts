import BaseComponent from './BaseComponent.js';
import ChatColor from '../../../../../net/md_5/bungee/api/ChatColor.js';
import ClickEvent from './ClickEvent.js';
import ComponentBuilder$FormatRetention from './ComponentBuilder$FormatRetention.js';
import HoverEvent from './HoverEvent.js';
export default interface TextComponent extends BaseComponent {
    addExtra(text: string): void;
    addExtra(component: BaseComponent): void;
    copyFormatting(component: BaseComponent): void;
    copyFormatting(component: BaseComponent, replace: boolean): void;
    copyFormatting(component: BaseComponent, retention: ComponentBuilder$FormatRetention, replace: boolean): void;
    duplicate(): BaseComponent;
    duplicate(): TextComponent;
    duplicateWithoutFormatting(): BaseComponent;
    getClickEvent(): ClickEvent;
    getColor(): ChatColor;
    getColorRaw(): ChatColor;
    getExtra(): Array<BaseComponent>;
    getFont(): string;
    getFontRaw(): string;
    getHoverEvent(): HoverEvent;
    getInsertion(): string;
    getText(): string;
    hasFormatting(): boolean;
    isBold(): boolean;
    isBoldRaw(): boolean;
    isItalic(): boolean;
    isItalicRaw(): boolean;
    isObfuscated(): boolean;
    isObfuscatedRaw(): boolean;
    isStrikethrough(): boolean;
    isStrikethroughRaw(): boolean;
    isUnderlined(): boolean;
    isUnderlinedRaw(): boolean;
    retain(retention: ComponentBuilder$FormatRetention): void;
    setBold(bold: boolean): void;
    setClickEvent(clickEvent: ClickEvent): void;
    setColor(color: ChatColor): void;
    setExtra(components: Array<any>): void;
    setFont(font: string): void;
    setHoverEvent(hoverEvent: HoverEvent): void;
    setInsertion(insertion: string): void;
    setItalic(italic: boolean): void;
    setObfuscated(obfuscated: boolean): void;
    setStrikethrough(strikethrough: boolean): void;
    setText(text: string): void;
    setUnderlined(underlined: boolean): void;
    toLegacyText(): string;
    toPlainText(): string;
}
export default class TextComponent {
    static get $javaClass(): any;
    constructor();
    constructor(extras: Array<BaseComponent>);
    constructor(text: string);
    constructor(textComponent: TextComponent);
    static fromLegacyText(message: string): Array<BaseComponent>;
    static fromLegacyText(message: string, defaultColor: ChatColor): Array<BaseComponent>;
    static toLegacyText(components: Array<BaseComponent>): string;
    static toPlainText(components: Array<BaseComponent>): string;
}
