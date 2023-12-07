"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PPSStateMachineFactory = exports.DesignDocStateMachineFactory = void 0;
const state_machine_1 = require("../state-machine");
const design_doc_1 = require("../design-doc");
const pps_1 = require("../pps");
const DesignDocStateMachineFactory = (subject) => {
    return new state_machine_1.StateMachine({
        name: 'DesignDoc',
        transitions: design_doc_1.DesignDocTransitions,
        actionDict: design_doc_1.DesignDocActionDisplayName,
        stateDict: design_doc_1.DesignDocStateDisplayName,
    }, subject);
};
exports.DesignDocStateMachineFactory = DesignDocStateMachineFactory;
const PPSStateMachineFactory = (subject) => {
    return new state_machine_1.StateMachine({
        name: 'PPS',
        transitions: pps_1.PPSTransitions,
        actionDict: pps_1.PPSActionDisplayName,
        stateDict: pps_1.PPSStateDisplayName,
    }, subject);
};
exports.PPSStateMachineFactory = PPSStateMachineFactory;
