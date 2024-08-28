import { CompanyType } from './company.type';
import { PoeType } from '../../poe/models/poe.type';

export type InternType = {
  id?: string;
  lastname: string;
  firstname: string;
  gender: string;
  mails: Array<string>;
  phone: string;
  occupation: string;
  company?: CompanyType;
  poe: PoeType;
};
