"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMachine = exports.OneStateHasDuplicateActions = void 0;
const token_1 = require("./token");
require("reflect-metadata");
function actionToStatesKey(from, action) {
    return `${from} + ${action}`;
}
class OneActionHasMultipleToStatesError extends Error {
    constructor(action, state1, state2) {
        super(`One Action ${action} pointed to states: ${state1} and ${state2}`);
    }
}
class OneStateHasDuplicateActions extends Error {
    constructor(state, action) {
        super(`One State "${state}" has multiple actions: "${action}"`);
    }
}
exports.OneStateHasDuplicateActions = OneStateHasDuplicateActions;
class StateMachine {
    params;
    subject;
    stateHasActions = new Map();
    actionToStates = new Map();
    anyFromTransition;
    actionDict;
    stateDict;
    name;
    constructor(params, subject) {
        this.params = params;
        this.subject = subject;
        this.name = params.name;
        this.params = params;
        this.stateDict = params.stateDict;
        this.actionDict = params.actionDict;
        params.transitions.forEach(transaction => {
            const { from, action, to } = transaction;
            const actions = this.stateHasActions.get(from) || [];
            if (actions.includes(action)) {
                throw new OneStateHasDuplicateActions(from, action);
            }
            actions.push(action);
            this.stateHasActions.set(from, actions);
            const key = actionToStatesKey(from, action);
            const existingState = this.actionToStates.get(key);
            if (existingState) {
                throw new OneActionHasMultipleToStatesError(action, existingState, to);
            }
            this.actionToStates.set(key, to);
            if (from === '*') {
                this.anyFromTransition = transaction;
            }
        });
        // handle from *
        if (this.anyFromTransition != null) {
            const { action, to } = this.anyFromTransition;
            for (const key in params.stateDict) {
                const actions = this.stateHasActions.get(key) || [];
                if (actions.includes(action)) {
                    continue;
                }
                actions.push(action);
                this.stateHasActions.set(key, actions);
            }
            // this.stateHasActions.forEach((actions, from) => {
            //   actions.push(action)
            // })
        }
    }
    can(currentState) {
        if (!currentState) {
            currentState = this.state();
        }
        if (!currentState) {
            return [];
        }
        const actions = this.stateHasActions.get(currentState);
        return actions || [];
    }
    apply(action) {
        const state = this.state();
        if (!state) {
            return null;
        }
        return this.next(state, action);
    }
    next(currentState, action) {
        const actions = this.stateHasActions.get(currentState);
        if (!actions) {
            return null;
        }
        if (!actions.includes(action)) {
            return null;
        }
        let tos = this.actionToStates.get(actionToStatesKey(currentState, action));
        if (!tos) {
            tos = this.actionToStates.get(actionToStatesKey('*', action));
        }
        if (!tos) {
            return null;
        }
        this.setSubjectCurrentState(tos);
        return tos;
    }
    state() {
        return this.getSubjectCurrentState();
    }
    visualize(showDisplayName = false) {
        if (showDisplayName) {
            const { stateDict, actionDict } = this;
            const stateDiagramElements = this.params.transitions.map(({ from, to, action }) => `${stateDict[from] ?? "[*]"} --> ${stateDict[to]} : ${actionDict[action]}`);
            return `stateDiagram-v2\n${stateDiagramElements.join('\n')}\n`;
        }
        const stateDiagramElements = this.params.transitions.map(({ from, to, action }) => `${from === "*" ? "[*]" : from} --> ${to} : ${action}`);
        return `stateDiagram-v2\n${stateDiagramElements.join('\n')}\n`;
    }
    getSubjectKey() {
        const subject = this.subject;
        if (!subject) {
            return null;
        }
        return Object.getOwnPropertyNames(subject).find(props => {
            const name = Reflect.getMetadata(token_1.STATE_MACHINE_STORE, subject, props);
            return name === this.name;
        });
    }
    getSubjectCurrentState() {
        // Get value of object property
        if (!this.subject) {
            return null;
        }
        const key = this.getSubjectKey();
        if (!key) {
            return null;
        }
        return Object.getOwnPropertyDescriptor(this.subject, key)?.value;
    }
    setSubjectCurrentState(state) {
        if (!this.subject) {
            return;
        }
        const key = this.getSubjectKey();
        if (!key) {
            return null;
        }
        ;
        this.subject[key] = state;
    }
}
exports.StateMachine = StateMachine;
