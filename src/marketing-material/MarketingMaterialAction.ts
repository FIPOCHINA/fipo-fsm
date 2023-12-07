export enum MarketingMaterialAction {
  Finalize = 'Finalize',
  SendForReview = 'SendForReview',
  ReviewApprove = 'ReviewApprove',
  NotifyCustomer = 'NotifyCustomer',
  NotifyCustomerOfRejection = 'NotifyCustomerOfRejection',
  ReviewReject = 'ReviewReject',
  Cancel = 'Cancel',
}

export const MarketingMaterialActionDisplayName: Record<MarketingMaterialAction, string> = {
  [MarketingMaterialAction.Finalize]: '定稿',
  [MarketingMaterialAction.SendForReview]: '送审',
  [MarketingMaterialAction.ReviewApprove]: '审核通过',
  [MarketingMaterialAction.ReviewReject]: '审核未通过',
  [MarketingMaterialAction.NotifyCustomer]: '已通知客户',
  [MarketingMaterialAction.NotifyCustomerOfRejection]: '通知客户未通过',
  [MarketingMaterialAction.Cancel]: '物料弃用',
}
