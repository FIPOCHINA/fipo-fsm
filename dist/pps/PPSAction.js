"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PPSActionDisplayName = exports.PPSAction = void 0;
var PPSAction;
(function (PPSAction) {
    PPSAction["SendForReview"] = "SendForReview";
    PPSAction["ReviewApprove"] = "ReviewApprove";
    PPSAction["NotifyCustomer"] = "NotifyCustomer";
    PPSAction["NotifyCustomerOfRejection"] = "NotifyCustomerOfRejection";
    PPSAction["ReviewReject"] = "ReviewReject";
    PPSAction["Cancel"] = "Cancel";
})(PPSAction || (exports.PPSAction = PPSAction = {}));
exports.PPSActionDisplayName = {
    [PPSAction.SendForReview]: '送审',
    [PPSAction.ReviewApprove]: '审核通过',
    [PPSAction.ReviewReject]: '审核未通过',
    [PPSAction.NotifyCustomerOfRejection]: '通知客户未通过',
    [PPSAction.NotifyCustomer]: '已通知客户',
    [PPSAction.Cancel]: '款式取消',
};
