import { type HandlerPlugin, type Plugin } from 'innet';
export interface SubPlugin {
    (plugins: Plugin[]): Plugin;
}
export interface HandlerSubPlugin {
    (plugins: HandlerPlugin[]): void;
}
export declare function createSubPlugin(plugin: HandlerSubPlugin, key?: symbol): SubPlugin;
