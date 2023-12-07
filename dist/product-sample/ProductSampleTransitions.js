"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSampleTransitions = void 0;
const ProductSampleAction_1 = require("./ProductSampleAction");
exports.ProductSampleTransitions = [
    {
        from: "WaitingForPS" /* ProductSampleState.WaitingForPS */,
        action: ProductSampleAction_1.ProductSampleAction.Organize,
        to: "OrganizedForSending" /* ProductSampleState.OrganizedForSending */
    },
    {
        from: "OrganizedForSending" /* ProductSampleState.OrganizedForSending */,
        action: ProductSampleAction_1.ProductSampleAction.SendForReview,
        to: "InReview" /* ProductSampleState.InReview */
    },
    {
        from: "InReview" /* ProductSampleState.InReview */,
        action: ProductSampleAction_1.ProductSampleAction.ReviewApprove,
        to: "ReviewApproved" /* ProductSampleState.ReviewApproved */
    },
    {
        from: "InReview" /* ProductSampleState.InReview */,
        action: ProductSampleAction_1.ProductSampleAction.ReviewReject,
        to: "ReviewRejected" /* ProductSampleState.ReviewRejected */
    },
    {
        from: "ReviewApproved" /* ProductSampleState.ReviewApproved */,
        action: ProductSampleAction_1.ProductSampleAction.NotifyCustomer,
        to: "CustomerNotified" /* ProductSampleState.CustomerNotified */
    },
    {
        from: "ReviewRejected" /* ProductSampleState.ReviewRejected */,
        action: ProductSampleAction_1.ProductSampleAction.NotifyCustomerOfRejection,
        to: "CustomerModifyingForRejection" /* ProductSampleState.CustomerModifyingForRejection */
    },
    {
        from: "CustomerModifyingForRejection" /* ProductSampleState.CustomerModifyingForRejection */,
        action: ProductSampleAction_1.ProductSampleAction.Organize,
        to: "OrganizedForSending" /* ProductSampleState.OrganizedForSending */
    }
];
