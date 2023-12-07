"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingMaterialActionDisplayName = exports.MarketingMaterialAction = void 0;
var MarketingMaterialAction;
(function (MarketingMaterialAction) {
    MarketingMaterialAction["Finalize"] = "Finalize";
    MarketingMaterialAction["SendForReview"] = "SendForReview";
    MarketingMaterialAction["ReviewApprove"] = "ReviewApprove";
    MarketingMaterialAction["NotifyCustomer"] = "NotifyCustomer";
    MarketingMaterialAction["NotifyCustomerOfRejection"] = "NotifyCustomerOfRejection";
    MarketingMaterialAction["ReviewReject"] = "ReviewReject";
    MarketingMaterialAction["Cancel"] = "Cancel";
})(MarketingMaterialAction || (exports.MarketingMaterialAction = MarketingMaterialAction = {}));
exports.MarketingMaterialActionDisplayName = {
    [MarketingMaterialAction.Finalize]: '定稿',
    [MarketingMaterialAction.SendForReview]: '送审',
    [MarketingMaterialAction.ReviewApprove]: '审核通过',
    [MarketingMaterialAction.ReviewReject]: '审核未通过',
    [MarketingMaterialAction.NotifyCustomer]: '已通知客户',
    [MarketingMaterialAction.NotifyCustomerOfRejection]: '通知客户未通过',
    [MarketingMaterialAction.Cancel]: '物料弃用',
};
