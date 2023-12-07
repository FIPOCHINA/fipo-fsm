import { DesignDocState } from './DesignDocState'
import { DesignDocAction } from './DesignDocAction'
import { TransitionParam } from '../state-machine'

export const DesignDocTransitions: TransitionParam<
  DesignDocAction,
  DesignDocState
>[] = [
  {
    from: DesignDocState.Draft,
    action: DesignDocAction.Finalize,
    to: DesignDocState.FinalDraft,
  },
  {
    from: DesignDocState.FinalDraft,
    action: DesignDocAction.SendForReview,
    to: DesignDocState.InReview,
  },
  {
    from: DesignDocState.InReview,
    action: DesignDocAction.ReviewApprove,
    to: DesignDocState.ReviewApproved,
  },
  {
    from: DesignDocState.InReview,
    action: DesignDocAction.ReviewReject,
    to: DesignDocState.ReviewRejected,
  },
  {
    from: DesignDocState.InReview,
    action: DesignDocAction.ReviewApproveWithChanges,
    to: DesignDocState.ApprovedWithChanges,
  },
  {
    from: DesignDocState.ReviewApproved,
    action: DesignDocAction.NotifyCustomer,
    to: DesignDocState.CustomerNotified,
  },
  {
    from: DesignDocState.ReviewRejected,
    action: DesignDocAction.NotifyCustomerOfRejection,
    to: DesignDocState.CustomerModifyingForRejection,
  },
  {
    from: DesignDocState.CustomerModifyingForRejection,
    action: DesignDocAction.Finalize,
    to: DesignDocState.FinalDraft,
  },
  {
    from: DesignDocState.ApprovedWithChanges,
    action: DesignDocAction.NotifyCustomerOfChanges,
    to: DesignDocState.CustomerModifyingForChanges,
  },

  {
    from: DesignDocState.CustomerModifyingForChanges,
    action: DesignDocAction.NotifyCustomer,
    to: DesignDocState.CustomerNotified,
  },
  {
    from: DesignDocState.ReviewApprovedWithChanges,
    action: DesignDocAction.InHouseChanged,
    to: DesignDocState.InHouseChanged,
  },
  {
    from: DesignDocState.InHouseChanged,
    action: DesignDocAction.NotifyCustomer,
    to: DesignDocState.CustomerNotified,
  },
]
