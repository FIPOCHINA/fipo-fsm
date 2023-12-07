"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingMaterialStateDisplayName = exports.MarketingMaterialState = void 0;
var MarketingMaterialState;
(function (MarketingMaterialState) {
    MarketingMaterialState["Draft"] = "Draft";
    MarketingMaterialState["Finalized"] = "Finalized";
    MarketingMaterialState["InReview"] = "InReview";
    MarketingMaterialState["ReviewApproved"] = "ReviewApproved";
    MarketingMaterialState["CustomerNotified"] = "CustomerNotified";
    MarketingMaterialState["Cancelled"] = "Cancelled";
    MarketingMaterialState["ReviewRejected"] = "ReviewRejected";
    MarketingMaterialState["CustomerModifyingForRejection"] = "CustomerModifyingForRejection";
})(MarketingMaterialState || (exports.MarketingMaterialState = MarketingMaterialState = {}));
exports.MarketingMaterialStateDisplayName = {
    [MarketingMaterialState.Draft]: '初稿',
    [MarketingMaterialState.Finalized]: '定稿',
    [MarketingMaterialState.InReview]: '正式审核中',
    [MarketingMaterialState.CustomerNotified]: '已通知客户',
    [MarketingMaterialState.Cancelled]: '款式取消',
    [MarketingMaterialState.ReviewRejected]: '审核未通过',
    [MarketingMaterialState.CustomerModifyingForRejection]: '客户修改中',
    [MarketingMaterialState.ReviewApproved]: '审核通过',
};
