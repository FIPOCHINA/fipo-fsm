"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignDocStateDisplayName = exports.DesignDocState = void 0;
var DesignDocState;
(function (DesignDocState) {
    DesignDocState["FinalDraft"] = "FinalDraft";
    DesignDocState["InReview"] = "InReview";
    DesignDocState["ReviewApproved"] = "ReviewApproved";
    DesignDocState["CustomerNotified"] = "CustomerNotified";
    DesignDocState["Cancelled"] = "Cancelled";
    DesignDocState["ReviewRejected"] = "ReviewRejected";
    DesignDocState["Modifying"] = "Modifying";
})(DesignDocState || (exports.DesignDocState = DesignDocState = {}));
exports.DesignDocStateDisplayName = {
    [DesignDocState.FinalDraft]: '定稿',
    [DesignDocState.InReview]: '正式审核中',
    [DesignDocState.ReviewApproved]: '审核通过',
    [DesignDocState.ReviewRejected]: '审核未通过',
    [DesignDocState.CustomerNotified]: '已通知客户',
    [DesignDocState.Modifying]: ' 修改中',
    [DesignDocState.Cancelled]: '款式取消',
};
