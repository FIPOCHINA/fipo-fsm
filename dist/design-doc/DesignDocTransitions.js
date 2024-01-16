"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignDocTransitions = void 0;
const DesignDocState_1 = require("./DesignDocState");
const DesignDocAction_1 = require("./DesignDocAction");
exports.DesignDocTransitions = [
    {
        from: '*',
        action: DesignDocAction_1.DesignDocAction.Cancel,
        to: DesignDocState_1.DesignDocState.Cancelled,
    },
    {
        from: DesignDocState_1.DesignDocState.Draft,
        action: DesignDocAction_1.DesignDocAction.Finalize,
        to: DesignDocState_1.DesignDocState.FinalDraft,
    },
    {
        from: DesignDocState_1.DesignDocState.FinalDraft,
        action: DesignDocAction_1.DesignDocAction.SendForReview,
        to: DesignDocState_1.DesignDocState.InReview,
    },
    {
        from: DesignDocState_1.DesignDocState.InReview,
        action: DesignDocAction_1.DesignDocAction.ReviewApprove,
        to: DesignDocState_1.DesignDocState.ReviewApproved,
    },
    {
        from: DesignDocState_1.DesignDocState.InReview,
        action: DesignDocAction_1.DesignDocAction.ReviewReject,
        to: DesignDocState_1.DesignDocState.ReviewRejected,
    },
    {
        from: DesignDocState_1.DesignDocState.InReview,
        action: DesignDocAction_1.DesignDocAction.ReviewApproveWithChanges,
        to: DesignDocState_1.DesignDocState.ReviewApprovedWithChanges,
    },
    {
        from: DesignDocState_1.DesignDocState.ReviewApproved,
        action: DesignDocAction_1.DesignDocAction.NotifyCustomer,
        to: DesignDocState_1.DesignDocState.CustomerNotified,
    },
    {
        from: DesignDocState_1.DesignDocState.ReviewRejected,
        action: DesignDocAction_1.DesignDocAction.NotifyCustomerOfRejection,
        to: DesignDocState_1.DesignDocState.CustomerModifyingForRejection,
    },
    {
        from: DesignDocState_1.DesignDocState.CustomerModifyingForRejection,
        action: DesignDocAction_1.DesignDocAction.Finalize,
        to: DesignDocState_1.DesignDocState.FinalDraft,
    },
    {
        from: DesignDocState_1.DesignDocState.ReviewApprovedWithChanges,
        action: DesignDocAction_1.DesignDocAction.NotifyCustomerOfChanges,
        to: DesignDocState_1.DesignDocState.CustomerModifyingForChanges,
    },
    {
        from: DesignDocState_1.DesignDocState.CustomerModifyingForChanges,
        action: DesignDocAction_1.DesignDocAction.NotifyCustomer,
        to: DesignDocState_1.DesignDocState.CustomerNotified,
    },
    {
        from: DesignDocState_1.DesignDocState.ReviewApprovedWithChanges,
        action: DesignDocAction_1.DesignDocAction.InHouseChanged,
        to: DesignDocState_1.DesignDocState.InHouseChanged,
    },
    {
        from: DesignDocState_1.DesignDocState.InHouseChanged,
        action: DesignDocAction_1.DesignDocAction.NotifyCustomer,
        to: DesignDocState_1.DesignDocState.CustomerNotified,
    },
];
