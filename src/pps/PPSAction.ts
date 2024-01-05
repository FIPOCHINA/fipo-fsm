export enum PPSAction {
    DesignDocDone = 'DesignDocDone',
    Organize = 'Organize',
    InternalReviewRejected = 'InternalReviewRejected',
    InternalReviewApprove = 'InternalReviewApprove',
    SendForReview = 'SendForReview',
    ReviewApprove = 'ReviewApprove',
    NotifyCustomer = 'NotifyCustomer',
    NotifyCustomerOfChanges = 'NotifyCustomerOfChanges',
    NotifyCustomerOfRejection = 'NotifyCustomerOfRejection',
    ReviewReject = 'ReviewReject',
    ReviewApproveWithChanges = 'ReviewApproveWithChanges',
    Cancel = 'Cancel',
}

export const PPSActionDisplayName: Record<PPSAction, string> = {
    [PPSAction.DesignDocDone]: '设计稿已完成',
    [PPSAction.Organize]: '寄送整理',
    [PPSAction.InternalReviewRejected]: '预审不通过',
    [PPSAction.InternalReviewApprove]: '预审通过',
    [PPSAction.SendForReview]: '送审',
    [PPSAction.ReviewApprove]: '审核通过',
    [PPSAction.NotifyCustomer]: '已通知客户',
    [PPSAction.NotifyCustomerOfChanges]: '通知客户修改',
    [PPSAction.NotifyCustomerOfRejection]: '通知客户未通过',
    [PPSAction.ReviewReject]: '审核未通过',
    [PPSAction.ReviewApproveWithChanges]: '审核通过（有修改）',
    [PPSAction.Cancel]: '款式取消',
}
