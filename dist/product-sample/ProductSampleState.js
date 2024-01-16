"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSampleStateDisplayName = exports.ProductSampleState = void 0;
var ProductSampleState;
(function (ProductSampleState) {
    ProductSampleState["WaitingForPSS"] = "WaitingForPSS";
    ProductSampleState["WaitingForPS"] = "WaitingForPS";
    ProductSampleState["OrganizedForSending"] = "OrganizedForSending";
    ProductSampleState["InReview"] = "InReview";
    ProductSampleState["ReviewApproved"] = "ReviewApproved";
    ProductSampleState["CustomerNotified"] = "CustomerNotified";
    ProductSampleState["Cancelled"] = "Cancelled";
    ProductSampleState["ReviewRejected"] = "ReviewRejected";
    ProductSampleState["CustomerModifyingForRejection"] = "CustomerModifyingForRejection";
})(ProductSampleState || (exports.ProductSampleState = ProductSampleState = {}));
exports.ProductSampleStateDisplayName = {
    [ProductSampleState.WaitingForPSS]: '等待产前样完成',
    [ProductSampleState.WaitingForPS]: '等待大货样',
    [ProductSampleState.OrganizedForSending]: '寄送整理已完成',
    [ProductSampleState.InReview]: '正式审核中',
    [ProductSampleState.CustomerNotified]: '已通知客户',
    [ProductSampleState.Cancelled]: '款式取消',
    [ProductSampleState.ReviewRejected]: '审核未通过',
    [ProductSampleState.CustomerModifyingForRejection]: '客户修改中',
    [ProductSampleState.ReviewApproved]: '审核通过',
};
