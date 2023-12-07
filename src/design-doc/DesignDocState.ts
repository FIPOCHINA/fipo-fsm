export const enum DesignDocState {
  Draft = 'Draft',
  FinalDraft = 'FinalDraft',
  InReview = 'InReview',
  ReviewApproved = 'ReviewApproved',
  CustomerNotified = 'CustomerNotified',
  Cancelled = 'Cancelled',
  ReviewRejected = 'ReviewRejected',
  ReviewApprovedWithChanges = 'ReviewApprovedWithChanges',
  CustomerModifyingForRejection = 'CustomerModifyingForRejection',
  CustomerModifyingForChanges = 'CustomerModifyingForChanges',
  ApprovedWithChanges = 'ApprovedWithChanges',
  InHouseChanged = 'InHouseChanged',
}

export const DesignDocStateDisplayName: Record<DesignDocState, string> = {
  [DesignDocState.Draft]: '初稿',
  [DesignDocState.FinalDraft]: '定稿',
  [DesignDocState.InReview]: '正式审核中',
  [DesignDocState.ReviewApproved]: '审核通过',
  [DesignDocState.CustomerNotified]: '已通知客户',
  [DesignDocState.Cancelled]: '款式取消',
  [DesignDocState.ReviewRejected]: '审核未通过',
  [DesignDocState.ReviewApprovedWithChanges]: '审核通过（有修改）',
  [DesignDocState.CustomerModifyingForRejection]: '客户修改中（驳回）',
  [DesignDocState.CustomerModifyingForChanges]: '客户修改中（有修改）',
  [DesignDocState.ApprovedWithChanges]: '审核通过（有修改）',
  [DesignDocState.InHouseChanged]: '内部修改完成',
}
