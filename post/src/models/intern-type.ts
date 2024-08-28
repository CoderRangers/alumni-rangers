import { CompanyType } from './company-type';
import { PoeType } from './poe-type';

export type InternType = {
  id?: string;
  lastname: string;
  firstname: string;
  gender: string;
  emails: Array<string>;
  phone: string;
  occupation: string;
  company?: CompanyType;
  poe: PoeType;
};
