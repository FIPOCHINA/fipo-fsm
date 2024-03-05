import {STATE_MACHINE_STORE} from './token'
import 'reflect-metadata'

export interface TransitionParam<A extends string, S extends string> {
  from: S | string
  action: A
  to: S
}

export interface StateMachineGraph<A extends string, S extends string> {
  name: string
  transitions: TransitionParam<A, S>[]
  actionDict: Record<A, string>
  stateDict: Record<S, string>
}

function actionToStatesKey(from: string, action: string) {
  return `${from} + ${action}`
}

class OneActionHasMultipleToStatesError extends Error {
  constructor(action: string, state1: string, state2: string) {
    super(`One Action ${action} pointed to states: ${state1} and ${state2}`)
  }
}

export class OneStateHasDuplicateActions extends Error {
  constructor(state: string, action: string) {
    super(`One State "${state}" has multiple actions: "${action}"`)
  }
}

export class StateMachine<
  T extends object | null,
  Action extends string,
  State extends string,
> {
  private stateHasActions: Map<string, Action[]> = new Map()
  private actionToStates: Map<string, State> = new Map()
  private anyFromTransition?: TransitionParam<any, any>
  private actionDict: Record<string, string>
  private stateDict: Record<string, string>
  public readonly name: string
  constructor(
    private readonly params: StateMachineGraph<Action, State>,
    public subject?: T,
  ) {
    this.name = params.name
    this.params = params
    this.stateDict = params.stateDict
    this.actionDict = params.actionDict
    params.transitions.forEach(transaction => {
      const { from, action, to } = transaction
      const actions = this.stateHasActions.get(from) || []
      if (actions.includes(action)) {
        throw new OneStateHasDuplicateActions(from, action)
      }
      actions.push(action)
      this.stateHasActions.set(from, actions)

      const key = actionToStatesKey(from, action)
      const existingState = this.actionToStates.get(key)
      if (existingState) {
        throw new OneActionHasMultipleToStatesError(action, existingState, to)
      }
      this.actionToStates.set(key, to)

      if (from === '*') {
        this.anyFromTransition = transaction
      }
    })

    // handle from *
    if (this.anyFromTransition != null) {
      const { action, to } = this.anyFromTransition
      this.stateHasActions.forEach((actions, from) => {
        actions.push(action)
      })
    }
  }

  can(currentState?: State | null): Action[] {
    if (!currentState) {
      currentState = this.state()
    }
    if (!currentState) {
      return []
    }
    const actions = this.stateHasActions.get(currentState)
    return actions || []
  }

  apply(action: Action): State|null {
    const state = this.state()
    if (!state) {
      return null
    }
    return this.next(state, action)
  }

  next(currentState: State, action: Action): State|null {
    const actions = this.stateHasActions.get(currentState)
    if (!actions) {
      return null
    }
    if (!actions.includes(action)) {
      return null
    }
    let tos = this.actionToStates.get(actionToStatesKey(currentState, action))
    if (!tos) {
      tos =  this.actionToStates.get(actionToStatesKey('*', action))
    }

    if(!tos) {
        return null
    }
    this.setSubjectCurrentState(tos)

    return tos
  }

  state(): State | null {
    return this.getSubjectCurrentState() as State
  }

  visualize(showDisplayName = false) {
    if (showDisplayName) {
      const { stateDict, actionDict } = this
      const stateDiagramElements = this.params.transitions.map(
        ({ from, to, action }) =>
          `${stateDict[from]??"[*]"} --> ${stateDict[to]} : ${actionDict[action]}`,
      )
      return `stateDiagram-v2\n${stateDiagramElements.join('\n')}\n`
    }

    const stateDiagramElements = this.params.transitions.map(
      ({ from, to, action }) => `${from === "*" ? "[*]": from} --> ${to} : ${action}`,
    )
    return `stateDiagram-v2\n${stateDiagramElements.join('\n')}\n`
  }

  private getSubjectKey() {
    const subject = this.subject
    if (!subject) {
      return null
    }
    return Object.getOwnPropertyNames(subject).find(props => {
      const name = Reflect.getMetadata(STATE_MACHINE_STORE, subject, props)
      return name === this.name
    })
  }

  private getSubjectCurrentState(): string | null {
    // Get value of object property
    if (!this.subject) {
      return null
    }
    const key = this.getSubjectKey()
    if (!key) {
      return null
    }
    return Object.getOwnPropertyDescriptor(this.subject, key)?.value
  }

  private setSubjectCurrentState(state: string) {
    if (!this.subject) {
      return
    }
    const key = this.getSubjectKey()
    if (!key) {
      return null
    }

    ;(this.subject as any)[key] = state
  }
}
