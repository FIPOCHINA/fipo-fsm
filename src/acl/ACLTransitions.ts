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
        action: ACLAction.FinanceReviewApprove,
        to: ACLState.WaitingTaking,
    },
    {
        from: ACLState.WaitingTaking,
        action: ACLAction.PartialRelease,
        to: ACLState.PartialReleasingAndPurchasing,
    },
    {
        from: ACLState.WaitingTaking,
        action: ACLAction.FullRelease,
        to: ACLState.Taken,
    },
    {
        from: ACLState.PartialReleasingAndPurchasing,
        action: ACLAction.FullRelease,
        to: ACLState.Taken,
    },
    {
        from: ACLState.Taken,
        action: ACLAction.MailToCustomer,
        to: ACLState.MailedToCustomer,
    }
]
