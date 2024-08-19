export enum PPSState {
  WaitingForPPS = 'WaitingForPPS',
  InReview = 'InReview',
  ReviewApproved = 'ReviewApproved',
  CustomerNotified = 'CustomerNotified',
  Cancelled = 'Cancelled',
  ReviewRejected = 'ReviewRejected',
  Modifying = 'Modifying',
}

export const PPSStateDisplayName: Record<PPSState, string> = {
  [PPSState.WaitingForPPS]: '等待产前样',
  [PPSState.InReview]: '正式审核中',
  [PPSState.ReviewApproved]: '审核通过',
  [PPSState.CustomerNotified]: '已通知客户',
  [PPSState.Cancelled]: '款式取消',
  [PPSState.ReviewRejected]: '审核未通过',
  [PPSState.Modifying]: '修改中',
}
