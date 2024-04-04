"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACLActionDisplayName = exports.ACLAction = void 0;
var ACLAction;
(function (ACLAction) {
    ACLAction["ResubmitBrandReview"] = "ResubmitBrandReview";
    ACLAction["BrandReviewReject"] = "BrandReviewReject";
    ACLAction["BrandReviewApprove"] = "BrandReviewApprove";
    ACLAction["FinanceReviewApprove"] = "FinanceReviewApprove";
    ACLAction["PartialRelease"] = "PartialRelease";
    ACLAction["FullRelease"] = "FullRelease";
    ACLAction["MailToCustomer"] = "MailToCustomer";
})(ACLAction || (exports.ACLAction = ACLAction = {}));
exports.ACLActionDisplayName = {
    [ACLAction.ResubmitBrandReview]: '重新提交品牌部审核',
    [ACLAction.BrandReviewReject]: '品牌部审核未通过',
    [ACLAction.BrandReviewApprove]: '品牌部审核通过',
    [ACLAction.FinanceReviewApprove]: '财务审核通过',
    [ACLAction.PartialRelease]: '部分发放',
    [ACLAction.FullRelease]: '全部发放',
    [ACLAction.MailToCustomer]: '寄送客户',
};
