import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Messager {
  @Prop()
  emitter: string;

  @Prop()
  recipient: string;

  @Prop()
  datetime: string;

  @Prop()
  message: Array<string>;
}
export const messagerSchema = SchemaFactory.createForClass(Messager);