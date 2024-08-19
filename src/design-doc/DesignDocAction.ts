export enum DesignDocAction {
  SendForReview = 'SendForReview',
  ReviewApprove = 'ReviewApprove',
  NotifyCustomer = 'NotifyCustomer',
  NotifyCustomerOfRejection = 'NotifyCustomerOfRejection',
  ReviewReject = 'ReviewReject',
  Cancel = 'Cancel',
}

export const DesignDocActionDisplayName: Record<DesignDocAction, string> = {
  [DesignDocAction.SendForReview]: '送审',
  [DesignDocAction.ReviewApprove]: '审核通过',
  [DesignDocAction.NotifyCustomer]: '已通知客户',
  [DesignDocAction.NotifyCustomerOfRejection]: '通知客户未通过',
  [DesignDocAction.ReviewReject]: '审核未通过',
  [DesignDocAction.Cancel]: '款式取消',
}
