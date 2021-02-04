import Scoreboard from './Scoreboard.js';
export default interface ScoreboardManager {
    getMainScoreboard(): Scoreboard;
    getNewScoreboard(): Scoreboard;
}
export default class ScoreboardManager {
    static get $javaClass(): any;
}
