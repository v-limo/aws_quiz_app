import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Question, QuestionDocument } from '../schemas/question.schema';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name)
    private readonly questionModel: Model<QuestionDocument>,
  ) {}

  create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    return this.questionModel.create(createQuestionDto);
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel.find();
  }

  async findOne(id: number): Promise<Question> {
    return this.questionModel.findById(id);
  }

  async update(
    id: number,
    updateQuestionDto: UpdateQuestionDto,
  ): Promise<Question> {
    return this.questionModel.findByIdAndUpdate(id, updateQuestionDto);
  }

  async remove(id: number) {
    return this.questionModel.findByIdAndDelete(id);
  }
}
