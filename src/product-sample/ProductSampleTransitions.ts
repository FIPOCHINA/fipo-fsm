import {ProductSampleState} from './ProductSampleState'
import {TransitionParam} from '../state-machine'
import {ProductSampleAction} from "./ProductSampleAction";

export const ProductSampleTransitions: TransitionParam<
    ProductSampleAction,
    ProductSampleState
>[] = [
    {
        from: ProductSampleState.WaitingForPPS,
        action: ProductSampleAction.PPSDone,
        to: ProductSampleState.WaitingForPS
    },
    {
        from: ProductSampleState.WaitingForPS,
        action: ProductSampleAction.Organize,
        to: ProductSampleState.OrganizedForSending
    },
    {
        from: ProductSampleState.OrganizedForSending,
        action: ProductSampleAction.SendForReview,
        to: ProductSampleState.InReview
    },
    {
        from: ProductSampleState.InReview,
        action: ProductSampleAction.ReviewApprove,
        to: ProductSampleState.ReviewApproved
    },
    {
        from: ProductSampleState.InReview,
        action: ProductSampleAction.ReviewReject,
        to: ProductSampleState.ReviewRejected
    },
    {
        from: ProductSampleState.ReviewApproved,
        action: ProductSampleAction.NotifyCustomer,
        to: ProductSampleState.CustomerNotified
    },
    {
        from: ProductSampleState.ReviewRejected,
        action: ProductSampleAction.NotifyCustomerOfRejection,
        to: ProductSampleState.CustomerModifyingForRejection
    },
    {
        from: ProductSampleState.CustomerModifyingForRejection,
        action: ProductSampleAction.Organize,
        to: ProductSampleState.OrganizedForSending
    }
]
