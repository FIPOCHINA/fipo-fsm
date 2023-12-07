"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingMaterialTransitions = void 0;
const MarketingMaterialState_1 = require("./MarketingMaterialState");
const MarketingMaterialAction_1 = require("./MarketingMaterialAction");
exports.MarketingMaterialTransitions = [
    {
        from: '*',
        action: MarketingMaterialAction_1.MarketingMaterialAction.Cancel,
        to: MarketingMaterialState_1.MarketingMaterialState.Cancelled
    },
    {
        from: MarketingMaterialState_1.MarketingMaterialState.Draft,
        action: MarketingMaterialAction_1.MarketingMaterialAction.Finalize,
        to: MarketingMaterialState_1.MarketingMaterialState.Finalized
    },
    {
        from: MarketingMaterialState_1.MarketingMaterialState.Finalized,
        action: MarketingMaterialAction_1.MarketingMaterialAction.SendForReview,
        to: MarketingMaterialState_1.MarketingMaterialState.InReview
    },
    {
        from: MarketingMaterialState_1.MarketingMaterialState.InReview,
        action: MarketingMaterialAction_1.MarketingMaterialAction.ReviewApprove,
        to: MarketingMaterialState_1.MarketingMaterialState.ReviewApproved
    },
    {
        from: MarketingMaterialState_1.MarketingMaterialState.InReview,
        action: MarketingMaterialAction_1.MarketingMaterialAction.ReviewReject,
        to: MarketingMaterialState_1.MarketingMaterialState.ReviewRejected
    },
    {
        from: MarketingMaterialState_1.MarketingMaterialState.ReviewApproved,
        action: MarketingMaterialAction_1.MarketingMaterialAction.NotifyCustomer,
        to: MarketingMaterialState_1.MarketingMaterialState.CustomerNotified
    },
    {
        from: MarketingMaterialState_1.MarketingMaterialState.ReviewRejected,
        action: MarketingMaterialAction_1.MarketingMaterialAction.NotifyCustomerOfRejection,
        to: MarketingMaterialState_1.MarketingMaterialState.CustomerModifyingForRejection
    },
    {
        from: MarketingMaterialState_1.MarketingMaterialState.CustomerModifyingForRejection,
        action: MarketingMaterialAction_1.MarketingMaterialAction.Finalize,
        to: MarketingMaterialState_1.MarketingMaterialState.Finalized
    }
];
