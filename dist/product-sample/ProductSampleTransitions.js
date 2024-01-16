"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSampleTransitions = void 0;
const ProductSampleState_1 = require("./ProductSampleState");
const ProductSampleAction_1 = require("./ProductSampleAction");
exports.ProductSampleTransitions = [
    {
        from: ProductSampleState_1.ProductSampleState.WaitingForPSS,
        action: ProductSampleAction_1.ProductSampleAction.PPSDone,
        to: ProductSampleState_1.ProductSampleState.WaitingForPS
    },
    {
        from: ProductSampleState_1.ProductSampleState.WaitingForPS,
        action: ProductSampleAction_1.ProductSampleAction.Organize,
        to: ProductSampleState_1.ProductSampleState.OrganizedForSending
    },
    {
        from: ProductSampleState_1.ProductSampleState.OrganizedForSending,
        action: ProductSampleAction_1.ProductSampleAction.SendForReview,
        to: ProductSampleState_1.ProductSampleState.InReview
    },
    {
        from: ProductSampleState_1.ProductSampleState.InReview,
        action: ProductSampleAction_1.ProductSampleAction.ReviewApprove,
        to: ProductSampleState_1.ProductSampleState.ReviewApproved
    },
    {
        from: ProductSampleState_1.ProductSampleState.InReview,
        action: ProductSampleAction_1.ProductSampleAction.ReviewReject,
        to: ProductSampleState_1.ProductSampleState.ReviewRejected
    },
    {
        from: ProductSampleState_1.ProductSampleState.ReviewApproved,
        action: ProductSampleAction_1.ProductSampleAction.NotifyCustomer,
        to: ProductSampleState_1.ProductSampleState.CustomerNotified
    },
    {
        from: ProductSampleState_1.ProductSampleState.ReviewRejected,
        action: ProductSampleAction_1.ProductSampleAction.NotifyCustomerOfRejection,
        to: ProductSampleState_1.ProductSampleState.CustomerModifyingForRejection
    },
    {
        from: ProductSampleState_1.ProductSampleState.CustomerModifyingForRejection,
        action: ProductSampleAction_1.ProductSampleAction.Organize,
        to: ProductSampleState_1.ProductSampleState.OrganizedForSending
    }
];
