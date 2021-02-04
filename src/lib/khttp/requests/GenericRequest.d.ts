import Authorization from '../../khttp/structures/authorization/Authorization.js';
import FileLike from '../../khttp/structures/files/FileLike.js';
import Request from './Request.js';
export default interface GenericRequest extends Request {
    getAllowRedirects(): boolean;
    getAuth(): Authorization;
    getBody(): Array<number>;
    getCookies(): any;
    getData(): any;
    getFiles(): Array<FileLike>;
    getHeaders(): any;
    getHostnameVerifier(): any;
    getJson(): any;
    getMethod(): string;
    getParams(): any;
    getSslContext(): any;
    getStream(): boolean;
    getTimeout(): number;
    getUrl(): string;
}
export default class GenericRequest {
    static get $javaClass(): any;
    constructor(method: string, url: string, params: any, headers: any, data: any, json: any, auth: Authorization, cookies: any, timeout: number, allowRedirects: boolean, stream: boolean, files: Array<any>, sslContext: any, hostnameVerifier: any);
    static access$getDEFAULT_DATA_HEADERS$cp(): any;
    static access$getDEFAULT_FORM_HEADERS$cp(): any;
    static access$getDEFAULT_HEADERS$cp(): any;
    static access$getDEFAULT_JSON_HEADERS$cp(): any;
    static access$getDEFAULT_UPLOAD_HEADERS$cp(): any;
}