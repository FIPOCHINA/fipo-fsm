"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSampleActionDisplayName = exports.ProductSampleAction = void 0;
var ProductSampleAction;
(function (ProductSampleAction) {
    ProductSampleAction["PPSDone"] = "PPSDone";
    ProductSampleAction["Organize"] = "Organize";
    ProductSampleAction["SendForReview"] = "SendForReview";
    ProductSampleAction["ReviewApprove"] = "ReviewApprove";
    ProductSampleAction["NotifyCustomer"] = "NotifyCustomer";
    ProductSampleAction["NotifyCustomerOfRejection"] = "NotifyCustomerOfRejection";
    ProductSampleAction["ReviewReject"] = "ReviewReject";
})(ProductSampleAction || (exports.ProductSampleAction = ProductSampleAction = {}));
exports.ProductSampleActionDisplayName = {
    [ProductSampleAction.PPSDone]: '产前样完成',
    [ProductSampleAction.Organize]: '寄送整理',
    [ProductSampleAction.SendForReview]: '送审',
    [ProductSampleAction.ReviewApprove]: '审核通过',
    [ProductSampleAction.NotifyCustomer]: '已通知客户',
    [ProductSampleAction.NotifyCustomerOfRejection]: '通知客户未通过',
    [ProductSampleAction.ReviewReject]: '审核未通过',
};
