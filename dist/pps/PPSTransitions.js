"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PPSTransitions = void 0;
const PPSState_1 = require("./PPSState");
const PPSAction_1 = require("./PPSAction");
exports.PPSTransitions = [
    {
        from: '*',
        action: PPSAction_1.PPSAction.Cancel,
        to: PPSState_1.PPSState.Cancelled
    },
    {
        from: PPSState_1.PPSState.WaitingForPPS,
        action: PPSAction_1.PPSAction.SendForReview,
        to: PPSState_1.PPSState.InReview
    },
    {
        from: PPSState_1.PPSState.InReview,
        action: PPSAction_1.PPSAction.ReviewApprove,
        to: PPSState_1.PPSState.ReviewApproved
    },
    {
        from: PPSState_1.PPSState.InReview,
        action: PPSAction_1.PPSAction.ReviewReject,
        to: PPSState_1.PPSState.ReviewRejected
    },
    {
        from: PPSState_1.PPSState.ReviewRejected,
        action: PPSAction_1.PPSAction.NotifyCustomerOfRejection,
        to: PPSState_1.PPSState.Modifying
    },
    {
        from: PPSState_1.PPSState.Modifying,
        action: PPSAction_1.PPSAction.SendForReview,
        to: PPSState_1.PPSState.InReview
    },
    {
        from: PPSState_1.PPSState.ReviewApproved,
        action: PPSAction_1.PPSAction.NotifyCustomer,
        to: PPSState_1.PPSState.CustomerNotified
    },
];
