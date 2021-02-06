export default class Button {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Button');
    }
    static $isInstance(obj) {
        return obj instanceof Button.$javaClass;
    }
    constructor(...args) {
        return new Button.$javaClass(...args);
    }
}
