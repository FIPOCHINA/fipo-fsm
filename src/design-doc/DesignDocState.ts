export enum DesignDocState {
  FinalDraft = 'FinalDraft',
  InReview = 'InReview',
  ReviewApproved = 'ReviewApproved',
  CustomerNotified = 'CustomerNotified',
  Cancelled = 'Cancelled',
  ReviewRejected = 'ReviewRejected',
  Modifying = 'Modifying',
}

export const DesignDocStateDisplayName: Record<DesignDocState, string> = {
  [DesignDocState.FinalDraft]: '定稿',
  [DesignDocState.InReview]: '正式审核中',
  [DesignDocState.ReviewApproved]: '审核通过',
  [DesignDocState.ReviewRejected]: '审核未通过',
  [DesignDocState.CustomerNotified]: '已通知客户',
  [DesignDocState.Modifying]: ' 修改中',
  [DesignDocState.Cancelled]: '款式取消',
}
