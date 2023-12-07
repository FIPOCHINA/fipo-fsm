"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignDocTransitions = void 0;
const DesignDocAction_1 = require("./DesignDocAction");
exports.DesignDocTransitions = [
    {
        from: "Draft" /* DesignDocState.Draft */,
        action: DesignDocAction_1.DesignDocAction.Finalize,
        to: "FinalDraft" /* DesignDocState.FinalDraft */,
    },
    {
        from: "FinalDraft" /* DesignDocState.FinalDraft */,
        action: DesignDocAction_1.DesignDocAction.SendForReview,
        to: "InReview" /* DesignDocState.InReview */,
    },
    {
        from: "InReview" /* DesignDocState.InReview */,
        action: DesignDocAction_1.DesignDocAction.ReviewApprove,
        to: "ReviewApproved" /* DesignDocState.ReviewApproved */,
    },
    {
        from: "InReview" /* DesignDocState.InReview */,
        action: DesignDocAction_1.DesignDocAction.ReviewReject,
        to: "ReviewRejected" /* DesignDocState.ReviewRejected */,
    },
    {
        from: "InReview" /* DesignDocState.InReview */,
        action: DesignDocAction_1.DesignDocAction.ReviewApproveWithChanges,
        to: "ApprovedWithChanges" /* DesignDocState.ApprovedWithChanges */,
    },
    {
        from: "ReviewApproved" /* DesignDocState.ReviewApproved */,
        action: DesignDocAction_1.DesignDocAction.NotifyCustomer,
        to: "CustomerNotified" /* DesignDocState.CustomerNotified */,
    },
    {
        from: "ReviewRejected" /* DesignDocState.ReviewRejected */,
        action: DesignDocAction_1.DesignDocAction.NotifyCustomerOfRejection,
        to: "CustomerModifyingForRejection" /* DesignDocState.CustomerModifyingForRejection */,
    },
    {
        from: "CustomerModifyingForRejection" /* DesignDocState.CustomerModifyingForRejection */,
        action: DesignDocAction_1.DesignDocAction.Finalize,
        to: "FinalDraft" /* DesignDocState.FinalDraft */,
    },
    {
        from: "ApprovedWithChanges" /* DesignDocState.ApprovedWithChanges */,
        action: DesignDocAction_1.DesignDocAction.NotifyCustomerOfChanges,
        to: "CustomerModifyingForChanges" /* DesignDocState.CustomerModifyingForChanges */,
    },
    {
        from: "CustomerModifyingForChanges" /* DesignDocState.CustomerModifyingForChanges */,
        action: DesignDocAction_1.DesignDocAction.NotifyCustomer,
        to: "CustomerNotified" /* DesignDocState.CustomerNotified */,
    },
    {
        from: "ReviewApprovedWithChanges" /* DesignDocState.ReviewApprovedWithChanges */,
        action: DesignDocAction_1.DesignDocAction.InHouseChanged,
        to: "InHouseChanged" /* DesignDocState.InHouseChanged */,
    },
    {
        from: "InHouseChanged" /* DesignDocState.InHouseChanged */,
        action: DesignDocAction_1.DesignDocAction.NotifyCustomer,
        to: "CustomerNotified" /* DesignDocState.CustomerNotified */,
    },
];
