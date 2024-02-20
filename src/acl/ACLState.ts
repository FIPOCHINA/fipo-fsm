import {ACLAction} from "./ACLAction";

export enum ACLState {
  WaitingBrandReview = 'WaitingBrandReview',
  BrandReviewRejected = 'BrandReviewRejected',
  WaitingFinancialReview = 'WaitingFinancialReview',
  WaitingPurchase = 'WaitingPurchase',
  InInventory = 'InInventory',
  WaitingTaking = 'WaitingTaking',
  Taken = 'Taken',
  MailedToCustomer = 'MailedToCustomer',
}

export const ACLStateDisplayName: Record<ACLState, string> = {
  [ACLState.WaitingBrandReview]: '等待品牌审核',
  [ACLState.BrandReviewRejected]: '品牌审核不通过',
  [ACLState.WaitingFinancialReview]: '等待财务部审核',
  [ACLState.WaitingPurchase]: '等待采购',
  [ACLState.InInventory]: '已入库',
  [ACLState.WaitingTaking]: '待领用',
  [ACLState.Taken]: '已领用',
  [ACLState.MailedToCustomer]: '已寄送客户',
}
