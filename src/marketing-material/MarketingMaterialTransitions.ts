import {MarketingMaterialState} from './MarketingMaterialState'
import {TransitionParam} from '../state-machine'
import {MarketingMaterialAction} from "./MarketingMaterialAction";

export const MarketingMaterialTransitions: TransitionParam<
    MarketingMaterialAction,
    MarketingMaterialState
>[] = [
    {
        from: '*',
        action: MarketingMaterialAction.Cancel,
        to: MarketingMaterialState.Cancelled
    },
    {
        from: MarketingMaterialState.Draft,
        action: MarketingMaterialAction.Finalize,
        to: MarketingMaterialState.Finalized
    },
    {
        from: MarketingMaterialState.Finalized,
        action: MarketingMaterialAction.SendForReview,
        to: MarketingMaterialState.InReview
    },
    {
        from: MarketingMaterialState.InReview,
        action: MarketingMaterialAction.ReviewApprove,
        to: MarketingMaterialState.ReviewApproved
    },
    {
        from: MarketingMaterialState.InReview,
        action: MarketingMaterialAction.ReviewReject,
        to: MarketingMaterialState.ReviewRejected
    },
    {
        from: MarketingMaterialState.ReviewApproved,
        action: MarketingMaterialAction.NotifyCustomer,
        to: MarketingMaterialState.CustomerNotified
    },

    {
        from: MarketingMaterialState.ReviewRejected,
        action: MarketingMaterialAction.NotifyCustomerOfRejection,
        to: MarketingMaterialState.CustomerModifyingForRejection
    },
    {
        from: MarketingMaterialState.CustomerModifyingForRejection,
        action: MarketingMaterialAction.Finalize,
        to: MarketingMaterialState.Finalized
    }
]
