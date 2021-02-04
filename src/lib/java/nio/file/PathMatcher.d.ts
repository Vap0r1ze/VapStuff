import Path from './Path.js';
export default interface PathMatcher {
    matches(arg0: Path): boolean;
}
export default class PathMatcher {
    static get $javaClass(): any;
}
