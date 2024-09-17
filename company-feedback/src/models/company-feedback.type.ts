import { CompanyRating } from './company-rating.type';
import { CompanyType } from './company.type';

export type CompanyFeedbackType = {
  id?: string;
  company: CompanyType;
  feedbackTitle: string;
  rating: CompanyRating;
  feedbackText: string;
  jobTitle: string;
  jobStartDate: Date;
  jobEndDate: Date;
  salaryLow?: number;
  salaryHigh?: number;
  postedAt: Date;
  lastname: string;
  firstname: string;
  internId: string;
};
