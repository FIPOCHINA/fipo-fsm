import { OneStateHasDuplicateActions, StateMachine, StateStore } from '../src'
import { expect } from '@jest/globals'

export enum StateEnum {
  StateA = 'StateA',
  StateB = 'StateB',
  StateC = 'StateC',
}
export enum ActionEnum {
  ActionA = 'ActionA',
  ActionB = 'ActionB',
  ActionC = 'ActionC',
}

export const StateDisplayNames: Record<StateEnum, string> = {
  [StateEnum.StateA]: '状态A',
  [StateEnum.StateB]: '状态B',
  [StateEnum.StateC]: '状态C',
}

export const ActionDisplayNames: Record<ActionEnum, string> = {
  [ActionEnum.ActionA]: '行动A',
  [ActionEnum.ActionB]: '行动B',
  [ActionEnum.ActionC]: '行动C',
}

export class ObjectHasState {
  field1 = 'field1'
  field2 = 'field2'
  field3 = 'field3'
  @StateStore('test')
  status: StateEnum = StateEnum.StateA
}

describe('State Machine Testing', () => {
  it('Get Next Action', () => {
    const machine = new StateMachine<ObjectHasState, ActionEnum, StateEnum>({
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
    })

    expect(machine.can(StateEnum.StateA).sort()).toStrictEqual(
      [ActionEnum.ActionA].sort(),
    )
  })

  it('Get Next Multiple Actions', () => {
    const machine = new StateMachine<ObjectHasState, ActionEnum, StateEnum>({
      name: 'test',

      transitions: [
        {
          from: StateEnum.StateA,
          action: ActionEnum.ActionA,
          to: StateEnum.StateB,
        },
        {
          from: StateEnum.StateA,
          action: ActionEnum.ActionC,
          to: StateEnum.StateC,
        },
      ],
      actionDict: ActionDisplayNames,
      stateDict: StateDisplayNames,
    })

    expect(machine.can(StateEnum.StateA).sort()).toStrictEqual(
      [ActionEnum.ActionC, ActionEnum.ActionA].sort(),
    )
  })

  it('From A to B', () => {
    const machine = new StateMachine<ObjectHasState, ActionEnum, StateEnum>({
      name: 'test',

      transitions: [
        {
          from: StateEnum.StateA,
          action: ActionEnum.ActionA,
          to: StateEnum.StateB,
        },
        {
          from: StateEnum.StateA,
          action: ActionEnum.ActionC,
          to: StateEnum.StateC,
        },
      ],
      actionDict: ActionDisplayNames,
      stateDict: StateDisplayNames,
    })
    expect(machine.next(StateEnum.StateA, ActionEnum.ActionA)).toBe(
      StateEnum.StateB,
    )
  })

  it('One State HasDupActions', () => {
    const machine = () => {
      new StateMachine<ObjectHasState, ActionEnum, StateEnum>({
        name: 'test',

        transitions: [
          {
            from: StateEnum.StateA,
            action: ActionEnum.ActionA,
            to: StateEnum.StateB,
          },
          {
            from: StateEnum.StateA,
            action: ActionEnum.ActionA,
            to: StateEnum.StateC,
          },
        ],
        actionDict: ActionDisplayNames,
        stateDict: StateDisplayNames,
      })
    }
    expect(machine).toThrow(OneStateHasDuplicateActions)
    expect(machine).toThrow(
      'One State "StateA" has multiple actions: "ActionA"',
    )
  })

  it('One Action Has Multiple To States', () => {
    const machine = () => {
      new StateMachine<ObjectHasState, ActionEnum, StateEnum>({
        name: 'test',

        transitions: [
          {
            from: StateEnum.StateA,
            action: ActionEnum.ActionA,
            to: StateEnum.StateB,
          },
          {
            from: StateEnum.StateA,
            action: ActionEnum.ActionA,
            to: StateEnum.StateC,
          },
          {
            from: StateEnum.StateB,
            action: ActionEnum.ActionB,
            to: StateEnum.StateC,
          },
        ],
        actionDict: ActionDisplayNames,
        stateDict: StateDisplayNames,
      })
    }
    expect(machine).toThrow(
      'One State "StateA" has multiple actions: "ActionA"',
    )
  })

  it('From A to C', () => {
    const machine = new StateMachine<never, ActionEnum, StateEnum>({
      name: 'test',
      transitions: [
        {
          from: StateEnum.StateA,
          action: ActionEnum.ActionA,
          to: StateEnum.StateB,
        },
        {
          from: StateEnum.StateA,
          action: ActionEnum.ActionC,
          to: StateEnum.StateC,
        },
        {
          from: StateEnum.StateA,
          action: ActionEnum.ActionB,
          to: StateEnum.StateC,
        },
      ],
      actionDict: ActionDisplayNames,
      stateDict: StateDisplayNames,
    })
    expect(machine.next(StateEnum.StateA, ActionEnum.ActionA)).toBe(
      StateEnum.StateB,
    )
  })

  it('From A to C with object', () => {
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
            from: StateEnum.StateA,
            action: ActionEnum.ActionC,
            to: StateEnum.StateC,
          },
          {
            from: StateEnum.StateA,
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
    machine.apply(ActionEnum.ActionA)
    expect(machine.state()).toBe(StateEnum.StateB)
  })
})
