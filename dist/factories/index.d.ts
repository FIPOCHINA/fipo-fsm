import { StateMachine } from "../state-machine";
import { DesignDocAction, DesignDocState } from "../design-doc";
import { PPSAction, PPSState } from "../pps";
export declare const DesignDocStateMachineFactory: <T extends object | null>(subject: T) => StateMachine<T, DesignDocAction, DesignDocState>;
export declare const PPSStateMachineFactory: <T extends object | null>(subject: T) => StateMachine<T, PPSAction, PPSState>;
//# sourceMappingURL=index.d.ts.map