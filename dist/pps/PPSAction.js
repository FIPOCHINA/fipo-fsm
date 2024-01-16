"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PPSActionDisplayName = exports.PPSAction = void 0;
var PPSAction;
(function (PPSAction) {
    PPSAction["DesignDocDone"] = "DesignDocDone";
    PPSAction["Organize"] = "Organize";
    PPSAction["InternalReviewRejected"] = "InternalReviewRejected";
    PPSAction["InternalReviewApprove"] = "InternalReviewApprove";
    PPSAction["SendForReview"] = "SendForReview";
    PPSAction["ReviewApprove"] = "ReviewApprove";
    PPSAction["NotifyCustomer"] = "NotifyCustomer";
    PPSAction["NotifyCustomerOfChanges"] = "NotifyCustomerOfChanges";
    PPSAction["NotifyCustomerOfRejection"] = "NotifyCustomerOfRejection";
    PPSAction["ReviewReject"] = "ReviewReject";
    PPSAction["ReviewApproveWithChanges"] = "ReviewApproveWithChanges";
    PPSAction["Cancel"] = "Cancel";
})(PPSAction || (exports.PPSAction = PPSAction = {}));
exports.PPSActionDisplayName = {
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
};
