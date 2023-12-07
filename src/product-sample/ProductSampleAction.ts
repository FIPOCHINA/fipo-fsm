import {ProductSampleStateDisplayName} from "./ProductSampleState";

export enum ProductSampleAction {
  Organize = 'Organize',
  SendForReview = 'SendForReview',
  ReviewApprove = 'ReviewApprove',
  NotifyCustomer = 'NotifyCustomer',
  NotifyCustomerOfRejection = 'NotifyCustomerOfRejection',
  ReviewReject = 'ReviewReject',
}

export const ProductSampleActionDisplayName: Record<ProductSampleAction, string> = {
  [ProductSampleAction.Organize]: '寄送整理',
  [ProductSampleAction.SendForReview]: '送审',
  [ProductSampleAction.ReviewApprove]: '审核通过',
  [ProductSampleAction.NotifyCustomer]: '已通知客户',
  [ProductSampleAction.NotifyCustomerOfRejection]: '通知客户未通过',
  [ProductSampleAction.ReviewReject]: '审核未通过',
}
