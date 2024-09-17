export enum CompanyCategory {
  largeGroup = 'Grand groupe',
  smallAndMediumCompany = 'PME',
  startUp = 'Start-up',
  others = 'Autre',
}

export enum CompanyRating {
  veryNegative = 'Très négatif',
  slightlyNegative = 'Plutôt négatif',
  neutral = 'Neutre',
  slightlyPositive = 'Plutôt positif',
  veryPositive = 'Positif',
}

export type CompanyFeedbackType = {
  company: string;
  companyType: CompanyCategory;
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
