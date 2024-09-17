import { CompanyType } from "../company-type";
import { CompanyRating } from "./company-rating.type";
import { SalaryFormat } from "./salary-format.enum";


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
  salaryFormat: SalaryFormat;
  postedAt: Date;
  lastname: string;
  firstname: string;
  internId: string;
};
