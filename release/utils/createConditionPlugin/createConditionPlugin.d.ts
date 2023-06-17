import { type SubPlugin } from '../createSubPlugin';
export interface Condition {
    (): boolean;
}
export declare function createConditionPlugin(condition: Condition, key?: symbol): SubPlugin;
