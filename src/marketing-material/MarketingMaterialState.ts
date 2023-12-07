import {MarketingMaterialAction} from "./MarketingMaterialAction";

export enum MarketingMaterialState {
  Draft = 'Draft',
  Finalized = 'Finalized',
  InReview = 'InReview',
  ReviewApproved = 'ReviewApproved',
  CustomerNotified = 'CustomerNotified',
  Cancelled = 'Cancelled',
  ReviewRejected = 'ReviewRejected',
  CustomerModifyingForRejection = 'CustomerModifyingForRejection',
}

export const MarketingMaterialStateDisplayName: Record<MarketingMaterialState, string> = {
  [MarketingMaterialState.Draft]: '初稿',
  [MarketingMaterialState.Finalized]: '定稿',
  [MarketingMaterialState.InReview]: '正式审核中',
  [MarketingMaterialState.CustomerNotified]: '已通知客户',
  [MarketingMaterialState.Cancelled]: '款式取消',
  [MarketingMaterialState.ReviewRejected]: '审核未通过',
  [MarketingMaterialState.CustomerModifyingForRejection]: '客户修改中',
  [MarketingMaterialState.ReviewApproved]: '审核通过',}
