"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACLTransitions = void 0;
const ACLState_1 = require("./ACLState");
const ACLAction_1 = require("./ACLAction");
exports.ACLTransitions = [
    {
        from: ACLState_1.ACLState.WaitingBrandReview,
        action: ACLAction_1.ACLAction.BrandReviewReject,
        to: ACLState_1.ACLState.BrandReviewRejected,
    },
    {
        from: ACLState_1.ACLState.BrandReviewRejected,
        action: ACLAction_1.ACLAction.ResubmitBrandReview,
        to: ACLState_1.ACLState.WaitingBrandReview,
    },
    {
        from: ACLState_1.ACLState.WaitingBrandReview,
        action: ACLAction_1.ACLAction.BrandReviewApprove,
        to: ACLState_1.ACLState.WaitingFinancialReview,
    },
    {
        from: ACLState_1.ACLState.WaitingFinancialReview,
        action: ACLAction_1.ACLAction.FinanceReviewApprove,
        to: ACLState_1.ACLState.WaitingTaking,
    },
    {
        from: ACLState_1.ACLState.WaitingTaking,
        action: ACLAction_1.ACLAction.PartialRelease,
        to: ACLState_1.ACLState.PartialReleasingAndPurchasing,
    },
    {
        from: ACLState_1.ACLState.WaitingTaking,
        action: ACLAction_1.ACLAction.FullRelease,
        to: ACLState_1.ACLState.Taken,
    },
    {
        from: ACLState_1.ACLState.PartialReleasingAndPurchasing,
        action: ACLAction_1.ACLAction.FullRelease,
        to: ACLState_1.ACLState.Taken,
    },
    {
        from: ACLState_1.ACLState.Taken,
        action: ACLAction_1.ACLAction.MailToCustomer,
        to: ACLState_1.ACLState.MailedToCustomer,
    }
];
