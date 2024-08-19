"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PPSStateDisplayName = exports.PPSState = void 0;
var PPSState;
(function (PPSState) {
    PPSState["WaitingForPPS"] = "WaitingForPPS";
    PPSState["InReview"] = "InReview";
    PPSState["ReviewApproved"] = "ReviewApproved";
    PPSState["CustomerNotified"] = "CustomerNotified";
    PPSState["Cancelled"] = "Cancelled";
    PPSState["ReviewRejected"] = "ReviewRejected";
    PPSState["Modifying"] = "Modifying";
})(PPSState || (exports.PPSState = PPSState = {}));
exports.PPSStateDisplayName = {
    [PPSState.WaitingForPPS]: '等待产前样',
    [PPSState.InReview]: '正式审核中',
    [PPSState.ReviewApproved]: '审核通过',
    [PPSState.CustomerNotified]: '已通知客户',
    [PPSState.Cancelled]: '款式取消',
    [PPSState.ReviewRejected]: '审核未通过',
    [PPSState.Modifying]: '修改中',
};
