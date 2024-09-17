import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './entities/course.entity';
import { Model } from 'mongoose';
import { Courses, CoursesType } from './schema/course.schema';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Courses.name) private courseModel: Model<CoursesType>,
  ) {}

  async createCourse(createCourseDto: CreateCourseDto) {
    const createCourse = await this.courseModel.create(createCourseDto);
    return createCourse.save();
  }

  async getCourses() {
    const getCourses = await this.courseModel.find().exec();
    return getCourses;
  }

  async getCourseById(id: string) {
    const courses = await this.courseModel.findById(id).exec();
    return courses;
  }

  async getCourseBySubCategory(subCategory: string) {
    return this.courseModel
      .find({ subCategory: { $regex: new RegExp(subCategory, 'i') } })
      .exec();
  }

  async updateCourseById(id: string, updateCourseDto: UpdateCourseDto) {
    const updateCourse = await this.courseModel
      .findByIdAndUpdate(id, updateCourseDto)
      .exec();
    if (!updateCourse) {
      throw new Error('Course not found');
    }
    return updateCourse;
  }

  async deleteCourseById(id: string) {
    const deleteCourse = await this.courseModel.findByIdAndDelete(id);
    return deleteCourse;
  }
}
