import {PPSState} from './PPSState'
import {TransitionParam} from '../state-machine'
import {PPSAction} from "./PPSAction";

export const PPSTransitions: TransitionParam<
    PPSAction,
    PPSState
>[] = [
    {
        from: PPSState.WaitingForPPS,
        action: PPSAction.Organize,
        to: PPSState.OrganizedForSending
    },
    {
        from: PPSState.OrganizedForSending,
        action: PPSAction.InternalReviewApprove,
        to: PPSState.InternalReviewed
    },
    {
        from: PPSState.InternalReviewed,
        action: PPSAction.SendForReview,
        to: PPSState.InReview
    },
    {
        from: PPSState.InReview,
        action: PPSAction.ReviewApprove,
        to: PPSState.ReviewApproved
    },
    {
        from: PPSState.InReview,
        action: PPSAction.ReviewReject,
        to: PPSState.ReviewRejected
    },
    {
        from: PPSState.InReview,
        action: PPSAction.ReviewApproveWithChanges,
        to: PPSState.ReviewApprovedWithChanges
    },
    {
        from: PPSState.ReviewApproved,
        action: PPSAction.NotifyCustomer,
        to: PPSState.CustomerNotified
    },
    {
        from: PPSState.ReviewRejected,
        action: PPSAction.NotifyCustomerOfRejection,
        to: PPSState.CustomerModifyingForRejection
    },
    {
        from: PPSState.CustomerModifyingForRejection,
        action: PPSAction.Organize,
        to: PPSState.OrganizedForSending
    },
    {
        from: PPSState.ReviewApprovedWithChanges,
        action: PPSAction.NotifyCustomerOfChanges,
        to: PPSState.CustomerNotified
    }

]
