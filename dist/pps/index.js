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
exports.PPSStateMachineFactory = void 0;
const PPSState_1 = require("./PPSState");
const state_machine_1 = require("../state-machine");
const PPSTransitions_1 = require("./PPSTransitions");
const PPSAction_1 = require("./PPSAction");
__exportStar(require("./PPSAction"), exports);
__exportStar(require("./PPSState"), exports);
__exportStar(require("./PPSTransitions"), exports);
const PPSStateMachineFactory = (subject) => {
    return new state_machine_1.StateMachine({
        name: 'DesignDoc',
        transitions: PPSTransitions_1.PPSTransitions,
        actionDict: PPSAction_1.PPSActionDisplayName,
        stateDict: PPSState_1.PPSStateDisplayName,
    }, subject);
};
exports.PPSStateMachineFactory = PPSStateMachineFactory;
