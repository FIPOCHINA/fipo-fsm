"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PPSTransitions = void 0;
const PPSAction_1 = require("./PPSAction");
exports.PPSTransitions = [
    {
        from: "WaitingForPPS" /* PPSState.WaitingForPPS */,
        action: PPSAction_1.PPSAction.Organize,
        to: "OrganizedForSending" /* PPSState.OrganizedForSending */
    },
    {
        from: "OrganizedForSending" /* PPSState.OrganizedForSending */,
        action: PPSAction_1.PPSAction.InternalReviewApprove,
        to: "InternalReviewed" /* PPSState.InternalReviewed */
    },
    {
        from: "InternalReviewed" /* PPSState.InternalReviewed */,
        action: PPSAction_1.PPSAction.SendForReview,
        to: "InReview" /* PPSState.InReview */
    },
    {
        from: "InReview" /* PPSState.InReview */,
        action: PPSAction_1.PPSAction.ReviewApprove,
        to: "ReviewApproved" /* PPSState.ReviewApproved */
    },
    {
        from: "InReview" /* PPSState.InReview */,
        action: PPSAction_1.PPSAction.ReviewReject,
        to: "ReviewRejected" /* PPSState.ReviewRejected */
    },
    {
        from: "InReview" /* PPSState.InReview */,
        action: PPSAction_1.PPSAction.ReviewApproveWithChanges,
        to: "ReviewApprovedWithChanges" /* PPSState.ReviewApprovedWithChanges */
    },
    {
        from: "ReviewApproved" /* PPSState.ReviewApproved */,
        action: PPSAction_1.PPSAction.NotifyCustomer,
        to: "CustomerNotified" /* PPSState.CustomerNotified */
    },
    {
        from: "ReviewRejected" /* PPSState.ReviewRejected */,
        action: PPSAction_1.PPSAction.NotifyCustomerOfRejection,
        to: "CustomerModifyingForRejection" /* PPSState.CustomerModifyingForRejection */
    },
    {
        from: "CustomerModifyingForRejection" /* PPSState.CustomerModifyingForRejection */,
        action: PPSAction_1.PPSAction.Organize,
        to: "OrganizedForSending" /* PPSState.OrganizedForSending */
    },
    {
        from: "ReviewApprovedWithChanges" /* PPSState.ReviewApprovedWithChanges */,
        action: PPSAction_1.PPSAction.Organize,
        to: "OrganizedForSending" /* PPSState.OrganizedForSending */
    },
    {
        from: "CustomerNotified" /* PPSState.CustomerNotified */,
        action: PPSAction_1.PPSAction.InternalReviewApprove,
        to: "InternalReviewed" /* PPSState.InternalReviewed */
    },
    {
        from: "CustomerNotified" /* PPSState.CustomerNotified */,
        action: PPSAction_1.PPSAction.InternalReviewRejected,
        to: "OrganizedForSending" /* PPSState.OrganizedForSending */
    },
    {
        from: "CustomerNotified" /* PPSState.CustomerNotified */,
        action: PPSAction_1.PPSAction.Organize,
        to: "OrganizedForSending" /* PPSState.OrganizedForSending */
    },
    {
        from: "CustomerNotified" /* PPSState.CustomerNotified */,
        action: PPSAction_1.PPSAction.ReviewApprove,
        to: "ReviewApproved" /* PPSState.ReviewApproved */
    },
    {
        from: "CustomerNotified" /* PPSState.CustomerNotified */,
        action: PPSAction_1.PPSAction.ReviewReject,
        to: "ReviewRejected" /* PPSState.ReviewRejected */
    },
    {
        from: "CustomerNotified" /* PPSState.CustomerNotified */,
        action: PPSAction_1.PPSAction.ReviewApproveWithChanges,
        to: "ReviewApprovedWithChanges" /* PPSState.ReviewApprovedWithChanges */
    },
    {
        from: "CustomerNotified" /* PPSState.CustomerNotified */,
        action: PPSAction_1.PPSAction.ReviewReject,
        to: "ReviewRejected" /* PPSState.ReviewRejected */
    },
    {
        from: "CustomerNotified" /* PPSState.CustomerNotified */,
        action: PPSAction_1.PPSAction.ReviewApproveWithChanges,
        to: "ReviewApprovedWithChanges" /* PPSState.ReviewApprovedWithChanges */
    },
    {
        from: "CustomerNotified" /* PPSState.CustomerNotified */,
        action: PPSAction_1.PPSAction.ReviewReject,
        to: "ReviewRejected" /* PPSState.ReviewRejected */
    },
    {
        from: "CustomerNotified" /* PPSState.CustomerNotified */,
        action: PPSAction_1.PPSAction.ReviewApproveWithChanges,
        to: "ReviewApprovedWithChanges" /* PPSState.ReviewApprovedWithChanges */
    }
];
