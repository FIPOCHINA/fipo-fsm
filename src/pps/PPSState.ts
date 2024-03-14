export enum PPSState {
  WaitingForDesignDoc = 'WaitingForDesignDoc',
  WaitingForPPS = 'WaitingForPPS',
  OrganizedForSending = 'OrganizedForSending',
  InternalReviewed = 'InternalReviewed',
  InReview = 'InReview',
  ReviewApproved = 'ReviewApproved',
  CustomerNotified = 'CustomerNotified',
  Cancelled = 'Cancelled',
  ReviewRejected = 'ReviewRejected',
  ReviewApprovedWithChanges = 'ReviewApprovedWithChanges',
  CustomerModifyingForRejection = 'CustomerModifyingForRejection',
}

export const PPSStateDisplayName: Record<PPSState, string> = {
  [PPSState.WaitingForDesignDoc]: '等待设计稿完成',
  [PPSState.WaitingForPPS]: '等待产前样',
  [PPSState.OrganizedForSending]: '寄送整理已完成',
  [PPSState.InReview]: '正式审核中',
  [PPSState.InternalReviewed]: '预审通过',
  [PPSState.ReviewApproved]: '审核通过',
  [PPSState.CustomerNotified]: '已通知客户',
  [PPSState.Cancelled]: '款式取消',
  [PPSState.ReviewRejected]: '审核未通过',
  [PPSState.ReviewApprovedWithChanges]: '审核通过（有修改）',
  [PPSState.CustomerModifyingForRejection]: '客户修改中',
}
