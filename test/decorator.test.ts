import { describe } from '@jest/globals'
import { StateMachine } from '../src'
import {
  ActionDisplayNames,
  ActionEnum,
  ObjectHasState,
  StateDisplayNames,
  StateEnum,
} from './unit.test'

describe('Decorator Testing', () => {
  it('Decorator Testing', () => {
    const machine = new StateMachine<ObjectHasState, ActionEnum, StateEnum>(
      {
        name: 'test',
        transitions: [
          {
            from: StateEnum.StateA,
            action: ActionEnum.ActionA,
            to: StateEnum.StateB,
          },
          {
            from: StateEnum.StateB,
            action: ActionEnum.ActionB,
            to: StateEnum.StateC,
          },
        ],
        actionDict: ActionDisplayNames,
        stateDict: StateDisplayNames,
      },
      new ObjectHasState(),
    )

    expect(machine.state()).toBe(StateEnum.StateA)
    expect(machine.apply(ActionEnum.ActionA)).toBe(StateEnum.StateB)
  })
})
