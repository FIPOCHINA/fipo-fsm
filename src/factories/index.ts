import {StateMachine} from "../state-machine";
import {
    DesignDocAction,
    DesignDocActionDisplayName,
    DesignDocState,
    DesignDocStateDisplayName,
    DesignDocTransitions
} from "../design-doc";
import {PPSAction, PPSActionDisplayName, PPSState, PPSStateDisplayName, PPSTransitions} from "../pps";
import {
    ProductSampleAction,
    ProductSampleActionDisplayName,
    ProductSampleState,
    ProductSampleStateDisplayName,
    ProductSampleTransitions
} from "../product-sample";
import {
    MarketingMaterialAction, MarketingMaterialActionDisplayName,
    MarketingMaterialState,
    MarketingMaterialStateDisplayName, MarketingMaterialTransitions
} from "../marketing-material";
import {ACLAction, ACLActionDisplayName, ACLState, ACLStateDisplayName, ACLTransitions} from "../acl";

export const DesignDocStateMachineFactory = <T extends object | null>(
    subject: T,
) => {
    return new StateMachine<T, DesignDocAction, DesignDocState>(
        {
            name: 'DesignDoc',
            transitions: DesignDocTransitions,
            actionDict: DesignDocActionDisplayName,
            stateDict: DesignDocStateDisplayName,
        },
        subject,
    )
}
export const PPSStateMachineFactory = <T extends object | null>(
    subject: T,
) => {
    return new StateMachine<T, PPSAction, PPSState>(
        {
            name: 'PPS',
            transitions: PPSTransitions,
            actionDict: PPSActionDisplayName,
            stateDict: PPSStateDisplayName,
        },
        subject,
    )
}

export const ProductSampleStateMachineFactory = <T extends object | null>(
    subject: T,
) => {
    return new StateMachine<T, ProductSampleAction, ProductSampleState>(
        {
            name: 'ProductSample',
            transitions: ProductSampleTransitions,
            actionDict: ProductSampleActionDisplayName,
            stateDict: ProductSampleStateDisplayName,
        },
        subject,
    )
}

export const MarketingMaterialStateMachineFactory = <T extends object | null>(
    subject: T,
) => {
    return new StateMachine<T, MarketingMaterialAction, MarketingMaterialState>(
        {
            name: 'MarketingMaterial',
            transitions: MarketingMaterialTransitions,
            actionDict: MarketingMaterialActionDisplayName,
            stateDict: MarketingMaterialStateDisplayName,
        },
        subject,
    )
}

export const ACLStateMachineFactory = <T extends object | null>(
    subject: T,
) => {
    return new StateMachine<T, ACLAction, ACLState>(
        {
            name: 'ACL',
            transitions: ACLTransitions,
            actionDict: ACLActionDisplayName,
            stateDict: ACLStateDisplayName,
        },
        subject,
    )
}