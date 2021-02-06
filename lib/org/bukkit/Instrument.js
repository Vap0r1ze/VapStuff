export default class Instrument {
    static get $javaClass() {
        return Java.type('org.bukkit.Instrument');
    }
    static $isInstance(obj) {
        return obj instanceof Instrument.$javaClass;
    }
    static get BANJO() {
        return this.$javaClass.BANJO;
    }
    static get BASS_DRUM() {
        return this.$javaClass.BASS_DRUM;
    }
    static get BASS_GUITAR() {
        return this.$javaClass.BASS_GUITAR;
    }
    static get BELL() {
        return this.$javaClass.BELL;
    }
    static get BIT() {
        return this.$javaClass.BIT;
    }
    static get CHIME() {
        return this.$javaClass.CHIME;
    }
    static get COW_BELL() {
        return this.$javaClass.COW_BELL;
    }
    static get DIDGERIDOO() {
        return this.$javaClass.DIDGERIDOO;
    }
    static get FLUTE() {
        return this.$javaClass.FLUTE;
    }
    static get GUITAR() {
        return this.$javaClass.GUITAR;
    }
    static get IRON_XYLOPHONE() {
        return this.$javaClass.IRON_XYLOPHONE;
    }
    static get PIANO() {
        return this.$javaClass.PIANO;
    }
    static get PLING() {
        return this.$javaClass.PLING;
    }
    static get SNARE_DRUM() {
        return this.$javaClass.SNARE_DRUM;
    }
    static get STICKS() {
        return this.$javaClass.STICKS;
    }
    static get XYLOPHONE() {
        return this.$javaClass.XYLOPHONE;
    }
}
