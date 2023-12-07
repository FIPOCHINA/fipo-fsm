import {PPSState, PPSStateDisplayName} from './PPSState'
import {StateMachine} from '../state-machine'
import {PPSTransitions} from './PPSTransitions'
import {PPSAction, PPSActionDisplayName} from "./PPSAction";

export * from './PPSAction'
export * from './PPSState'
export * from './PPSTransitions'


export const PPSStateMachineFactory = <T extends object | null>(
  subject: T,
) => {
  return new StateMachine<T, PPSAction, PPSState>(
    {
      name: 'DesignDoc',
      transitions: PPSTransitions,
      actionDict: PPSActionDisplayName,
      stateDict: PPSStateDisplayName,
    },
    subject,
  )
}
