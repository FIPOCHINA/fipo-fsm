export enum ACLAction {
    ResubmitBrandReview = 'ResubmitBrandReview',
    BrandReviewReject = 'BrandReviewReject',
    BrandReviewApprove = 'BrandReviewApprove',
    MarkAsPurchasing = 'MarkAsPurchasing',
    ConfirmRelease = 'ConfirmRelease',
    BookingInInventory = 'BookingInInventory',
    BookingOutInventory = 'BookingOutInventory',
    ConfirmTaken = 'ConfirmTaken',
    MailToCustomer = 'MailToCustomer',
}

export const ACLActionDisplayName: Record<ACLAction, string> = {
    [ACLAction.ResubmitBrandReview]: '重新提交品牌部审核',
    [ACLAction.BrandReviewReject]: '品牌部审核未通过',
    [ACLAction.BrandReviewApprove]: '品牌部审核通过',
    [ACLAction.MarkAsPurchasing]: '标记为"等待采购中"',
    [ACLAction.ConfirmRelease]: '确认发放',
    [ACLAction.BookingInInventory]: '登记入库',
    [ACLAction.BookingOutInventory]: '财务审核出库',
    [ACLAction.ConfirmTaken]: '确认领用',
    [ACLAction.MailToCustomer]: '寄送客户',


}
