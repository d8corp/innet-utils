import { type Plugin } from 'innet';
export type LoggerCallback = () => void;
export declare function logger(callback: LoggerCallback): Plugin;
