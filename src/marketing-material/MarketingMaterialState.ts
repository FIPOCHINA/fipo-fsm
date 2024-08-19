export enum MarketingMaterialState {

  InReview = 'InReview',
  ReviewApproved = 'ReviewApproved',
  CustomerNotified = 'CustomerNotified',
  Cancelled = 'Cancelled',
  ReviewRejected = 'ReviewRejected',
  Modifying = 'Modifying',
}

export const MarketingMaterialStateDisplayName: Record<MarketingMaterialState, string> = {
  [MarketingMaterialState.InReview]: '正式审核中',
  [MarketingMaterialState.ReviewRejected]: '审核未通过',
  [MarketingMaterialState.Modifying]: '修改中',
  [MarketingMaterialState.ReviewApproved]: '审核通过',
  [MarketingMaterialState.CustomerNotified]: '已通知客户',
  [MarketingMaterialState.Cancelled]: '物料弃用',
}
