export enum PPSAction {
    SendForReview = 'SendForReview',
    ReviewApprove = 'ReviewApprove',
    NotifyCustomer = 'NotifyCustomer',
    NotifyCustomerOfRejection = 'NotifyCustomerOfRejection',
    ReviewReject = 'ReviewReject',
    Cancel = 'Cancel',
}

export const PPSActionDisplayName: Record<PPSAction, string> = {
    [PPSAction.SendForReview]: '送审',
    [PPSAction.ReviewApprove]: '审核通过',
    [PPSAction.ReviewReject]: '审核未通过',
    [PPSAction.NotifyCustomerOfRejection]: '通知客户未通过',
    [PPSAction.NotifyCustomer]: '已通知客户',
    [PPSAction.Cancel]: '款式取消',
}
