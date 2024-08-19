export enum ProductSampleState {
  WaitingForPS = 'WaitingForPS',
  OrganizedForSending = 'OrganizedForSending',
  InReview = 'InReview',
  ReviewApproved = 'ReviewApproved',
  CustomerNotified = 'CustomerNotified',
  Cancelled = 'Cancelled',
  ReviewRejected = 'ReviewRejected',
  Modifying = 'Modifying',
}

export const ProductSampleStateDisplayName: Record<ProductSampleState, string> = {
  [ProductSampleState.WaitingForPS]: '等待大货样',
  [ProductSampleState.OrganizedForSending]: '寄送整理已完成',
  [ProductSampleState.InReview]: '正式审核中',
  [ProductSampleState.ReviewRejected]: '审核未通过',
  [ProductSampleState.Modifying]: '修改中',
  [ProductSampleState.CustomerNotified]: '已通知客户',
  [ProductSampleState.ReviewApproved]: '审核通过',
  [ProductSampleState.Cancelled]: '款式取消',

}
