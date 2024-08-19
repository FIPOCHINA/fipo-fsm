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
        to: MarketingMaterialState.Modifying
    }
    ,
    {
        from: MarketingMaterialState.Modifying,
        action: MarketingMaterialAction.SendForReview,
        to: MarketingMaterialState.InReview
    }
]
