import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PoeType } from './poe.type';
import { CompanyType } from './company.type';

@Schema()
export class Intern {
  @Prop()
  lastname: string;

  @Prop()
  firstname: string;

  @Prop()
  gender: string;

  @Prop()
  emails: Array<string>;

  @Prop()
  phone: string;

  @Prop()
  job: string;

  @Prop({ type: CompanyType })
  company: CompanyType;

  @Prop({ type: PoeType })
  poe: PoeType;
}

export const internSchema = SchemaFactory.createForClass(Intern);
