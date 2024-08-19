"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignDocActionDisplayName = exports.DesignDocAction = void 0;
var DesignDocAction;
(function (DesignDocAction) {
    DesignDocAction["SendForReview"] = "SendForReview";
    DesignDocAction["ReviewApprove"] = "ReviewApprove";
    DesignDocAction["NotifyCustomer"] = "NotifyCustomer";
    DesignDocAction["NotifyCustomerOfRejection"] = "NotifyCustomerOfRejection";
    DesignDocAction["ReviewReject"] = "ReviewReject";
    DesignDocAction["Cancel"] = "Cancel";
})(DesignDocAction || (exports.DesignDocAction = DesignDocAction = {}));
exports.DesignDocActionDisplayName = {
    [DesignDocAction.SendForReview]: '送审',
    [DesignDocAction.ReviewApprove]: '审核通过',
    [DesignDocAction.NotifyCustomer]: '已通知客户',
    [DesignDocAction.NotifyCustomerOfRejection]: '通知客户未通过',
    [DesignDocAction.ReviewReject]: '审核未通过',
    [DesignDocAction.Cancel]: '款式取消',
};
