import { Handler, Next, Plugin, PluginHandler } from 'innet';
export interface SubPlugin {
    (plugins: Plugin[]): Plugin;
}
export interface SubPluginHandler {
    (app: any, next: Next, handler: Handler, plugins: PluginHandler[]): any;
}
export declare function createSubPlugin(plugin: SubPluginHandler, key?: string): SubPlugin;
