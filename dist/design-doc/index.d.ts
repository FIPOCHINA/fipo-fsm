import { DesignDocState } from './DesignDocState';
import { StateMachine } from '../state-machine';
import { DesignDocAction } from './DesignDocAction';
export * from './DesignDocAction';
export * from './DesignDocState';
export * from './DesignDocTransitions';
export declare const DesignDocStateMachineFactory: <T extends object | null>(subject: T) => StateMachine<T, DesignDocAction, DesignDocState>;
//# sourceMappingURL=index.d.ts.map