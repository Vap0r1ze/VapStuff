"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VillagerCareerChangeEvent$ChangeReason {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.VillagerCareerChangeEvent$ChangeReason');
    }
    static $isInstance(obj) {
        return obj instanceof VillagerCareerChangeEvent$ChangeReason.$javaClass;
    }
    static get EMPLOYED() {
        return this.$javaClass.EMPLOYED;
    }
    static get LOSING_JOB() {
        return this.$javaClass.LOSING_JOB;
    }
}
exports.default = VillagerCareerChangeEvent$ChangeReason;
