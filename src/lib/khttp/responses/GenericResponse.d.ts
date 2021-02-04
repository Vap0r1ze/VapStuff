import Charset from '../../java/nio/charset/Charset.js';
import CookieJar from '../../khttp/structures/cookie/CookieJar.js';
import InputStream from '../../java/io/InputStream.js';
import Request from '../../khttp/requests/Request.js';
import Response from './Response.js';
export default interface GenericResponse extends Response {
    contentIterator(chunkSize: number): any;
    getConnection(): any;
    getContent(): Array<number>;
    getCookies(): CookieJar;
    getEncoding(): Charset;
    getHeaders(): any;
    getHistory(): Array<Response>;
    getInitializers(): Array<any>;
    getJsonArray(): any;
    getJsonObject(): any;
    getRaw(): InputStream;
    getRequest(): Request;
    getStatusCode(): number;
    getText(): string;
    getUrl(): string;
    lineIterator(chunkSize: number, delimiter: Array<number>): any;
    setEncoding(value: Charset): void;
}
export default class GenericResponse {
    static get $javaClass(): any;
    constructor(request: Request);
    static access$getDefaultEndInitializers$cp(): Array<any>;
    static access$getDefaultStartInitializers$cp(): Array<any>;
    static access$get_cookies$p($this: GenericResponse): CookieJar;
}
