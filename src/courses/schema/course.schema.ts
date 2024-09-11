import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CoursesType = HydratedDocument<Courses>;

@Schema()
export class Courses {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  price: string;

  @Prop()
  tag: string;
}

export const CourseSchema = SchemaFactory.createForClass(Courses);
