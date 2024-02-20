"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACLStateDisplayName = exports.ACLState = void 0;
var ACLState;
(function (ACLState) {
    ACLState["WaitingBrandReview"] = "WaitingBrandReview";
    ACLState["BrandReviewRejected"] = "BrandReviewRejected";
    ACLState["WaitingFinancialReview"] = "WaitingFinancialReview";
    ACLState["WaitingPurchase"] = "WaitingPurchase";
    ACLState["InInventory"] = "InInventory";
    ACLState["WaitingTaking"] = "WaitingTaking";
    ACLState["Taken"] = "Taken";
    ACLState["MailedToCustomer"] = "MailedToCustomer";
})(ACLState || (exports.ACLState = ACLState = {}));
exports.ACLStateDisplayName = {
    [ACLState.WaitingBrandReview]: '等待品牌审核',
    [ACLState.BrandReviewRejected]: '品牌审核不通过',
    [ACLState.WaitingFinancialReview]: '等待财务部审核',
    [ACLState.WaitingPurchase]: '等待采购',
    [ACLState.InInventory]: '已入库',
    [ACLState.WaitingTaking]: '待领用',
    [ACLState.Taken]: '已领用',
    [ACLState.MailedToCustomer]: '已寄送客户',
};
