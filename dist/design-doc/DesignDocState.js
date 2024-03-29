"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignDocStateDisplayName = exports.DesignDocState = void 0;
var DesignDocState;
(function (DesignDocState) {
    DesignDocState["Draft"] = "Draft";
    DesignDocState["FinalDraft"] = "FinalDraft";
    DesignDocState["InReview"] = "InReview";
    DesignDocState["ReviewApproved"] = "ReviewApproved";
    DesignDocState["CustomerNotified"] = "CustomerNotified";
    DesignDocState["Cancelled"] = "Cancelled";
    DesignDocState["ReviewRejected"] = "ReviewRejected";
    DesignDocState["ReviewApprovedWithChanges"] = "ReviewApprovedWithChanges";
    DesignDocState["CustomerModifyingForRejection"] = "CustomerModifyingForRejection";
    DesignDocState["CustomerModifyingForChanges"] = "CustomerModifyingForChanges";
    DesignDocState["InHouseChanged"] = "InHouseChanged";
})(DesignDocState || (exports.DesignDocState = DesignDocState = {}));
exports.DesignDocStateDisplayName = {
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
    [DesignDocState.InHouseChanged]: '内部修改完成',
};
