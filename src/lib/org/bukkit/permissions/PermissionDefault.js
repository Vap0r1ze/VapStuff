export default class PermissionDefault {
    static get $javaClass() {
        return Java.type('org.bukkit.permissions.PermissionDefault');
    }
    static get FALSE() {
        return this.$javaClass.FALSE;
    }
    static get NOT_OP() {
        return this.$javaClass.NOT_OP;
    }
    static get OP() {
        return this.$javaClass.OP;
    }
    static get TRUE() {
        return this.$javaClass.TRUE;
    }
}
