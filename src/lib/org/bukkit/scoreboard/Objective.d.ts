import DisplaySlot from './DisplaySlot.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import RenderType from './RenderType.js';
import Score from './Score.js';
import Scoreboard from './Scoreboard.js';
export default interface Objective {
    getCriteria(): string;
    getDisplayName(): string;
    getDisplaySlot(): DisplaySlot;
    getName(): string;
    getRenderType(): RenderType;
    getScore(arg0: string): Score;
    getScore(arg0: OfflinePlayer): Score;
    getScoreboard(): Scoreboard;
    isModifiable(): boolean;
    setDisplayName(arg0: string): void;
    setDisplaySlot(arg0: DisplaySlot): void;
    setRenderType(arg0: RenderType): void;
    unregister(): void;
}
export default class Objective {
    static get $javaClass(): any;
}
