"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingMaterialTransitions = void 0;
const MarketingMaterialAction_1 = require("./MarketingMaterialAction");
exports.MarketingMaterialTransitions = [
    {
        from: '*',
        action: MarketingMaterialAction_1.MarketingMaterialAction.Cancel,
        to: "Cancelled" /* MarketingMaterialState.Cancelled */
    },
    {
        from: "Draft" /* MarketingMaterialState.Draft */,
        action: MarketingMaterialAction_1.MarketingMaterialAction.Finalize,
        to: "Finalized" /* MarketingMaterialState.Finalized */
    },
    {
        from: "Finalized" /* MarketingMaterialState.Finalized */,
        action: MarketingMaterialAction_1.MarketingMaterialAction.SendForReview,
        to: "InReview" /* MarketingMaterialState.InReview */
    },
    {
        from: "InReview" /* MarketingMaterialState.InReview */,
        action: MarketingMaterialAction_1.MarketingMaterialAction.ReviewApprove,
        to: "ReviewApproved" /* MarketingMaterialState.ReviewApproved */
    },
    {
        from: "InReview" /* MarketingMaterialState.InReview */,
        action: MarketingMaterialAction_1.MarketingMaterialAction.ReviewReject,
        to: "ReviewRejected" /* MarketingMaterialState.ReviewRejected */
    },
    {
        from: "ReviewApproved" /* MarketingMaterialState.ReviewApproved */,
        action: MarketingMaterialAction_1.MarketingMaterialAction.NotifyCustomer,
        to: "CustomerNotified" /* MarketingMaterialState.CustomerNotified */
    },
    {
        from: "ReviewRejected" /* MarketingMaterialState.ReviewRejected */,
        action: MarketingMaterialAction_1.MarketingMaterialAction.NotifyCustomerOfRejection,
        to: "CustomerModifyingForRejection" /* MarketingMaterialState.CustomerModifyingForRejection */
    },
    {
        from: "CustomerModifyingForRejection" /* MarketingMaterialState.CustomerModifyingForRejection */,
        action: MarketingMaterialAction_1.MarketingMaterialAction.Finalize,
        to: "Finalized" /* MarketingMaterialState.Finalized */
    }
];
