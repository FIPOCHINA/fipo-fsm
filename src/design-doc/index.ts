import {DesignDocState, DesignDocStateDisplayName} from './DesignDocState'
import {StateMachine} from '../state-machine'
import {DesignDocAction, DesignDocActionDisplayName} from './DesignDocAction'
import {DesignDocTransitions} from './DesignDocTransitions'

export * from './DesignDocAction'
export * from './DesignDocState'
export * from './DesignDocTransitions'


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
