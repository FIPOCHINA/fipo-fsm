"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PPSStateDisplayName = exports.PPSState = void 0;
var PPSState;
(function (PPSState) {
    PPSState["WaitingForDesignDoc"] = "WaitingForDesignDoc";
    PPSState["WaitingForPPS"] = "WaitingForPPS";
    PPSState["OrganizedForSending"] = "OrganizedForSending";
    PPSState["InternalReviewed"] = "InternalReviewed";
    PPSState["InReview"] = "InReview";
    PPSState["ReviewApproved"] = "ReviewApproved";
    PPSState["CustomerNotified"] = "CustomerNotified";
    PPSState["Cancelled"] = "Cancelled";
    PPSState["ReviewRejected"] = "ReviewRejected";
    PPSState["ReviewApprovedWithChanges"] = "ReviewApprovedWithChanges";
    PPSState["CustomerModifyingForRejection"] = "CustomerModifyingForRejection";
})(PPSState || (exports.PPSState = PPSState = {}));
exports.PPSStateDisplayName = {
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
};
