import 'reflect-metadata';
export interface TransitionParam<A extends string, S extends string> {
    from: S | string;
    action: A;
    to: S;
}
export interface StateMachineGraph<A extends string, S extends string> {
    name: string;
    transitions: TransitionParam<A, S>[];
    actionDict: Record<A, string>;
    stateDict: Record<S, string>;
}
export declare class OneStateHasDuplicateActions extends Error {
    constructor(state: string, action: string);
}
export declare class StateMachine<T extends object | null, Action extends string, State extends string> {
    private readonly params;
    subject?: T | undefined;
    private stateHasActions;
    private actionToStates;
    private anyFromTransition;
    private actionDict;
    private stateDict;
    readonly name: string;
    constructor(params: StateMachineGraph<Action, State>, subject?: T | undefined);
    can(currentState?: State | null): Action[];
    apply(action: Action): State | null;
    next(currentState: State, action: Action): State | null;
    state(): State | null;
    visualize(showDisplayName?: boolean): string;
    private getSubjectKey;
    private getSubjectCurrentState;
    private setSubjectCurrentState;
}
//# sourceMappingURL=StateMachine.d.ts.map