"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignDocActionDisplayName = exports.DesignDocAction = void 0;
var DesignDocAction;
(function (DesignDocAction) {
    DesignDocAction["Finalize"] = "Finalize";
    DesignDocAction["SendForReview"] = "SendForReview";
    DesignDocAction["ReviewApprove"] = "ReviewApprove";
    DesignDocAction["NotifyCustomer"] = "NotifyCustomer";
    DesignDocAction["InHouseChanged"] = "InHouseChanged";
    DesignDocAction["NotifyCustomerOfChanges"] = "NotifyCustomerOfChanges";
    DesignDocAction["NotifyCustomerOfRejection"] = "NotifyCustomerOfRejection";
    DesignDocAction["ReviewReject"] = "ReviewReject";
    DesignDocAction["ReviewApproveWithChanges"] = "ReviewApproveWithChanges";
    DesignDocAction["Cancel"] = "Cancel";
})(DesignDocAction || (exports.DesignDocAction = DesignDocAction = {}));
exports.DesignDocActionDisplayName = {
    [DesignDocAction.Finalize]: '定稿',
    [DesignDocAction.SendForReview]: '送审',
    [DesignDocAction.ReviewApprove]: '审核通过',
    [DesignDocAction.NotifyCustomer]: '已通知客户',
    [DesignDocAction.InHouseChanged]: '已内部修改',
    [DesignDocAction.NotifyCustomerOfChanges]: '通知客户修改',
    [DesignDocAction.NotifyCustomerOfRejection]: '通知客户未通过',
    [DesignDocAction.ReviewReject]: '审核未通过',
    [DesignDocAction.ReviewApproveWithChanges]: '审核通过（有修改）',
    [DesignDocAction.Cancel]: '款式取消',
};
