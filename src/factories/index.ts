import {StateMachine} from "../state-machine";
import {
    DesignDocAction,
    DesignDocActionDisplayName,
    DesignDocState,
    DesignDocStateDisplayName,
    DesignDocTransitions
} from "../design-doc";
import {PPSAction, PPSActionDisplayName, PPSState, PPSStateDisplayName, PPSTransitions} from "../pps";

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