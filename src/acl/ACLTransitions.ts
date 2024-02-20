import {ACLState} from './ACLState'
import {TransitionParam} from '../state-machine'
import {ACLAction} from "./ACLAction";

export const ACLTransitions: TransitionParam<
    ACLAction,
    ACLState
>[] = [
    {
        from: ACLState.WaitingBrandReview,
        action: ACLAction.BrandReviewReject,
        to: ACLState.BrandReviewRejected,
    },
    {
        from: ACLState.BrandReviewRejected,
        action: ACLAction.ResubmitBrandReview,
        to: ACLState.WaitingBrandReview,
    },
    {
        from: ACLState.WaitingBrandReview,
        action: ACLAction.BrandReviewApprove,
        to: ACLState.WaitingFinancialReview,
    },
    {
        from: ACLState.WaitingFinancialReview,
        action: ACLAction.MarkAsPurchasing,
        to: ACLState.WaitingPurchase,
    },
    {
        from: ACLState.WaitingPurchase,
        action: ACLAction.BookingInInventory,
        to: ACLState.InInventory,
    },
    {
        from: ACLState.InInventory,
        action: ACLAction.BookingOutInventory,
        to: ACLState.WaitingTaking,
    },
    {
        from: ACLState.WaitingTaking,
        action: ACLAction.ConfirmTaken,
        to: ACLState.Taken,
    },
    {
        from: ACLState.Taken,
        action: ACLAction.MailToCustomer,
        to: ACLState.MailedToCustomer,
    },
    {
        from: ACLState.WaitingFinancialReview,
        action: ACLAction.ConfirmRelease,
        to: ACLState.WaitingTaking,
    }
]
