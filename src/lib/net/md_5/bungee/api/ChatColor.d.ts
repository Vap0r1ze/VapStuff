export default interface ChatColor {
    getColor(): any;
    getName(): string;
    name(): string;
    ordinal(): number;
}
export default class ChatColor {
    static get $javaClass(): any;
    static get ALL_CODES(): string;
    static get AQUA(): ChatColor;
    static get BLACK(): ChatColor;
    static get BLUE(): ChatColor;
    static get BOLD(): ChatColor;
    static get COLOR_CHAR(): string;
    static get DARK_AQUA(): ChatColor;
    static get DARK_BLUE(): ChatColor;
    static get DARK_GRAY(): ChatColor;
    static get DARK_GREEN(): ChatColor;
    static get DARK_PURPLE(): ChatColor;
    static get DARK_RED(): ChatColor;
    static get GOLD(): ChatColor;
    static get GRAY(): ChatColor;
    static get GREEN(): ChatColor;
    static get ITALIC(): ChatColor;
    static get LIGHT_PURPLE(): ChatColor;
    static get MAGIC(): ChatColor;
    static get RED(): ChatColor;
    static get RESET(): ChatColor;
    static get STRIKETHROUGH(): ChatColor;
    static get STRIP_COLOR_PATTERN(): any;
    static get UNDERLINE(): ChatColor;
    static get WHITE(): ChatColor;
    static get YELLOW(): ChatColor;
    static getByChar(code: string): ChatColor;
    static of(string: string): ChatColor;
    static of(color: any): ChatColor;
    static stripColor(input: string): string;
    static translateAlternateColorCodes(altColorChar: string, textToTranslate: string): string;
    static valueOf(_name: string): ChatColor;
    static values(): Array<ChatColor>;
}
