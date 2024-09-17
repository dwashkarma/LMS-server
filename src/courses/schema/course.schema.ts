import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CoursesType = HydratedDocument<Courses>;

class Purchase {
  @Prop()
  amount: number;
  @Prop()
  currency: string;
  @Prop()
  priceString: string;
  @Prop()
  currencySymbol: 'NRs' | '$';
}
@Schema()
export class Courses {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  courseCategory: string;

  @Prop({ required: true })
  subCategory: string;

  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  tag: string;

  @Prop()
  rating: number;

  @Prop({ type: Purchase, required: false })
  purchase: Purchase;
}

export const CourseSchema = SchemaFactory.createForClass(Courses);
