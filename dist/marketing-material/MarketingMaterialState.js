"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingMaterialStateDisplayName = exports.MarketingMaterialState = void 0;
var MarketingMaterialState;
(function (MarketingMaterialState) {
    MarketingMaterialState["InReview"] = "InReview";
    MarketingMaterialState["ReviewApproved"] = "ReviewApproved";
    MarketingMaterialState["CustomerNotified"] = "CustomerNotified";
    MarketingMaterialState["Cancelled"] = "Cancelled";
    MarketingMaterialState["ReviewRejected"] = "ReviewRejected";
    MarketingMaterialState["Modifying"] = "Modifying";
})(MarketingMaterialState || (exports.MarketingMaterialState = MarketingMaterialState = {}));
exports.MarketingMaterialStateDisplayName = {
    [MarketingMaterialState.InReview]: '正式审核中',
    [MarketingMaterialState.ReviewRejected]: '审核未通过',
    [MarketingMaterialState.Modifying]: '修改中',
    [MarketingMaterialState.ReviewApproved]: '审核通过',
    [MarketingMaterialState.CustomerNotified]: '已通知客户',
    [MarketingMaterialState.Cancelled]: '物料弃用',
};
