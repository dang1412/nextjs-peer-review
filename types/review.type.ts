export interface IReview {
  reviewee: string;
  reviewer: string;
  point?: number;  // 1->5
  comment?: string;
}
