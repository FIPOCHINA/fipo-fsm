import { StateMachine } from "../state-machine";
import { DesignDocAction, DesignDocState } from "../design-doc";
import { PPSAction, PPSState } from "../pps";
import { ProductSampleAction, ProductSampleState } from "../product-sample";
import { MarketingMaterialAction, MarketingMaterialState } from "../marketing-material";
import { ACLAction, ACLState } from "../acl";
export declare const DesignDocStateMachineFactory: <T extends object | null>(subject: T) => StateMachine<T, DesignDocAction, DesignDocState>;
export declare const PPSStateMachineFactory: <T extends object | null>(subject: T) => StateMachine<T, PPSAction, PPSState>;
export declare const ProductSampleStateMachineFactory: <T extends object | null>(subject: T) => StateMachine<T, ProductSampleAction, ProductSampleState>;
export declare const MarketingMaterialStateMachineFactory: <T extends object | null>(subject: T) => StateMachine<T, MarketingMaterialAction, MarketingMaterialState>;
export declare const ACLStateMachineFactory: <T extends object | null>(subject: T) => StateMachine<T, ACLAction, ACLState>;
//# sourceMappingURL=index.d.ts.map