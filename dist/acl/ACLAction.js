"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACLActionDisplayName = exports.ACLAction = void 0;
var ACLAction;
(function (ACLAction) {
    ACLAction["ResubmitBrandReview"] = "ResubmitBrandReview";
    ACLAction["BrandReviewReject"] = "BrandReviewReject";
    ACLAction["BrandReviewApprove"] = "BrandReviewApprove";
    ACLAction["MarkAsPurchasing"] = "MarkAsPurchasing";
    ACLAction["ConfirmRelease"] = "ConfirmRelease";
    ACLAction["BookingInInventory"] = "BookingInInventory";
    ACLAction["BookingOutInventory"] = "BookingOutInventory";
    ACLAction["ConfirmTaken"] = "ConfirmTaken";
    ACLAction["MailToCustomer"] = "MailToCustomer";
})(ACLAction || (exports.ACLAction = ACLAction = {}));
exports.ACLActionDisplayName = {
    [ACLAction.ResubmitBrandReview]: '重新提交品牌部审核',
    [ACLAction.BrandReviewReject]: '品牌部审核未通过',
    [ACLAction.BrandReviewApprove]: '品牌部审核通过',
    [ACLAction.MarkAsPurchasing]: '标记为"等待采购中"',
    [ACLAction.ConfirmRelease]: '确认发放',
    [ACLAction.BookingInInventory]: '登记入库',
    [ACLAction.BookingOutInventory]: '财务审核出库',
    [ACLAction.ConfirmTaken]: '确认领用',
    [ACLAction.MailToCustomer]: '寄送客户',
};
