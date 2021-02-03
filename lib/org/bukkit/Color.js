export default class Color {
    static get $javaClass() {
        return Java.type('org.bukkit.Color');
    }
    static get AQUA() {
        return Color.$javaClass.AQUA;
    }
    static get BLACK() {
        return Color.$javaClass.BLACK;
    }
    static get BLUE() {
        return Color.$javaClass.BLUE;
    }
    static get FUCHSIA() {
        return Color.$javaClass.FUCHSIA;
    }
    static get GRAY() {
        return Color.$javaClass.GRAY;
    }
    static get GREEN() {
        return Color.$javaClass.GREEN;
    }
    static get LIME() {
        return Color.$javaClass.LIME;
    }
    static get MAROON() {
        return Color.$javaClass.MAROON;
    }
    static get NAVY() {
        return Color.$javaClass.NAVY;
    }
    static get OLIVE() {
        return Color.$javaClass.OLIVE;
    }
    static get ORANGE() {
        return Color.$javaClass.ORANGE;
    }
    static get PURPLE() {
        return Color.$javaClass.PURPLE;
    }
    static get RED() {
        return Color.$javaClass.RED;
    }
    static get SILVER() {
        return Color.$javaClass.SILVER;
    }
    static get TEAL() {
        return Color.$javaClass.TEAL;
    }
    static get WHITE() {
        return Color.$javaClass.WHITE;
    }
    static get YELLOW() {
        return Color.$javaClass.YELLOW;
    }
    static deserialize(...args) {
        return Color.$javaClass.deserialize(...args);
    }
    static fromBGR(...args) {
        return Color.$javaClass.fromBGR(...args);
    }
    static fromRGB(...args) {
        return Color.$javaClass.fromRGB(...args);
    }
}
