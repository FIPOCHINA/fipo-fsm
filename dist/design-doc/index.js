"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignDocStateMachineFactory = void 0;
const DesignDocState_1 = require("./DesignDocState");
const state_machine_1 = require("../state-machine");
const DesignDocAction_1 = require("./DesignDocAction");
const DesignDocTransitions_1 = require("./DesignDocTransitions");
__exportStar(require("./DesignDocAction"), exports);
__exportStar(require("./DesignDocState"), exports);
__exportStar(require("./DesignDocTransitions"), exports);
const DesignDocStateMachineFactory = (subject) => {
    return new state_machine_1.StateMachine({
        name: 'DesignDoc',
        transitions: DesignDocTransitions_1.DesignDocTransitions,
        actionDict: DesignDocAction_1.DesignDocActionDisplayName,
        stateDict: DesignDocState_1.DesignDocStateDisplayName,
    }, subject);
};
exports.DesignDocStateMachineFactory = DesignDocStateMachineFactory;
