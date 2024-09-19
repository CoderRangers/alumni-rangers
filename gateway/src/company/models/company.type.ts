import { CompanyRating } from 'src/company-feedback/models/company-rating.type';

export enum CompanyCategory {
  largeGroup = 'Grand groupe',
  smallAndMediumCompany = 'PME',
  startUp = 'Start-up',
  others = 'Autre',
}

export type CompanyType = {
  id?: string;
  name: string;
  type: CompanyCategory;
  medianRating: CompanyRating;
  logo?: string;
};
