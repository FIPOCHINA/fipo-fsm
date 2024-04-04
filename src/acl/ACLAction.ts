export enum ACLAction {
    ResubmitBrandReview = 'ResubmitBrandReview',
    BrandReviewReject = 'BrandReviewReject',
    BrandReviewApprove = 'BrandReviewApprove',
    FinanceReviewApprove = 'FinanceReviewApprove',
    PartialRelease = 'PartialRelease',
    FullRelease = 'FullRelease',
    MailToCustomer = 'MailToCustomer',
}

export const ACLActionDisplayName: Record<ACLAction, string> = {
    [ACLAction.ResubmitBrandReview]: '重新提交品牌部审核',
    [ACLAction.BrandReviewReject]: '品牌部审核未通过',
    [ACLAction.BrandReviewApprove]: '品牌部审核通过',
    [ACLAction.FinanceReviewApprove]: '财务审核通过',
    [ACLAction.PartialRelease]: '部分发放',
    [ACLAction.FullRelease]: '全部发放',
    [ACLAction.MailToCustomer]: '寄送客户',


}
