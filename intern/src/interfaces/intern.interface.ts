import { Document } from 'mongoose';
import { CompanyType } from 'src/models/company.type';
import { PoeType } from 'src/models/poe.type';

export interface Intern extends Document {
  readonly lastname: string;
  readonly firstname: string;
  readonly gender: string;
  readonly emails: Array<string>;
  readonly phone: string;
  readonly occupation: string;
  readonly company: CompanyType;
  readonly poe: PoeType;
}
