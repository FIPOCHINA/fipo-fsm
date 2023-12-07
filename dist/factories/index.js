"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingMaterialStateMachineFactory = exports.ProductSampleStateMachineFactory = exports.PPSStateMachineFactory = exports.DesignDocStateMachineFactory = void 0;
const state_machine_1 = require("../state-machine");
const design_doc_1 = require("../design-doc");
const pps_1 = require("../pps");
const product_sample_1 = require("../product-sample");
const marketing_material_1 = require("../marketing-material");
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
const ProductSampleStateMachineFactory = (subject) => {
    return new state_machine_1.StateMachine({
        name: 'ProductSample',
        transitions: product_sample_1.ProductSampleTransitions,
        actionDict: product_sample_1.ProductSampleActionDisplayName,
        stateDict: product_sample_1.ProductSampleStateDisplayName,
    }, subject);
};
exports.ProductSampleStateMachineFactory = ProductSampleStateMachineFactory;
const MarketingMaterialStateMachineFactory = (subject) => {
    return new state_machine_1.StateMachine({
        name: 'MarketingMaterial',
        transitions: marketing_material_1.MarketingMaterialTransitions,
        actionDict: marketing_material_1.MarketingMaterialActionDisplayName,
        stateDict: marketing_material_1.MarketingMaterialStateDisplayName,
    }, subject);
};
exports.MarketingMaterialStateMachineFactory = MarketingMaterialStateMachineFactory;
