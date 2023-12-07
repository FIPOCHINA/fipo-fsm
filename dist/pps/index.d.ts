import { PPSState } from './PPSState';
import { StateMachine } from '../state-machine';
import { PPSAction } from "./PPSAction";
export * from './PPSAction';
export * from './PPSState';
export * from './PPSTransitions';
export declare const PPSStateMachineFactory: <T extends object | null>(subject: T) => StateMachine<T, PPSAction, PPSState>;
//# sourceMappingURL=index.d.ts.map