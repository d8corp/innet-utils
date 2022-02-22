import { Plugin } from 'innet';
export declare type LoggerCallback = (app: any, handler: any) => any;
export declare function logger(callback: LoggerCallback): Plugin;
