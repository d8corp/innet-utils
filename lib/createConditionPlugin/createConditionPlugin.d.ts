import { SubPlugin } from '../createSubPlugin';
export interface Condition {
    (app: any): boolean;
}
export declare function createConditionPlugin(condition: Condition, key?: string): SubPlugin;
