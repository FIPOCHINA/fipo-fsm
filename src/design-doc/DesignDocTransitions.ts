import { DesignDocState } from './DesignDocState'
import { DesignDocAction } from './DesignDocAction'
import { TransitionParam } from '../state-machine'

export const DesignDocTransitions: TransitionParam<
  DesignDocAction,
  DesignDocState
>[] = [
  {
    from: '*',
    action: DesignDocAction.Cancel,
    to: DesignDocState.Cancelled,
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
    from: DesignDocState.ReviewApproved,
    action: DesignDocAction.NotifyCustomer,
    to: DesignDocState.CustomerNotified,
  },
  {
    from: DesignDocState.ReviewRejected,
    action: DesignDocAction.NotifyCustomerOfRejection,
    to: DesignDocState.Modifying,
  },
  {
    from: DesignDocState.Modifying,
    action: DesignDocAction.SendForReview,
    to: DesignDocState.InReview
  }

]
