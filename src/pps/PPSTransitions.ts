import {PPSState} from './PPSState'
import {TransitionParam} from '../state-machine'
import {PPSAction} from "./PPSAction";

export const PPSTransitions: TransitionParam<
    PPSAction,
    PPSState
>[] = [
    {
        from: '*',
        action: PPSAction.Cancel,
        to: PPSState.Cancelled
    },
    {
        from: PPSState.WaitingForPPS,
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
        from: PPSState.ReviewRejected,
        action: PPSAction.NotifyCustomerOfRejection,
        to: PPSState.Modifying
    },
    {
        from: PPSState.Modifying,
        action: PPSAction.SendForReview,
        to: PPSState.InReview
    },
    {
        from: PPSState.ReviewApproved,
        action: PPSAction.NotifyCustomer,
        to: PPSState.CustomerNotified
    },

]
