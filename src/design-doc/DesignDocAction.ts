export enum DesignDocAction {
  Finalize = 'Finalize',
  SendForReview = 'SendForReview',
  ReviewApprove = 'ReviewApprove',
  NotifyCustomer = 'NotifyCustomer',
  InHouseChanged = 'InHouseChanged',
  NotifyCustomerOfChanges = 'NotifyCustomerOfChanges',
  NotifyCustomerOfRejection = 'NotifyCustomerOfRejection',
  ReviewReject = 'ReviewReject',
  ReviewApproveWithChanges = 'ReviewApproveWithChanges',
}

export const DesignDocActionDisplayName: Record<DesignDocAction, string> = {
  [DesignDocAction.Finalize]: '定稿',
  [DesignDocAction.SendForReview]: '送审',
  [DesignDocAction.ReviewApprove]: '审核通过',
  [DesignDocAction.NotifyCustomer]: '已通知客户',
  [DesignDocAction.InHouseChanged]: '已内部修改',
  [DesignDocAction.NotifyCustomerOfChanges]: '通知客户修改',
  [DesignDocAction.NotifyCustomerOfRejection]: '通知客户未通过',
  [DesignDocAction.ReviewReject]: '审核未通过',
  [DesignDocAction.ReviewApproveWithChanges]: '审核通过（有修改）',
}
