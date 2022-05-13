import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  @Prop()
  question: string;

  @Prop()
  answer: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
