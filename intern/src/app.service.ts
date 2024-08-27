/* import { Injectable } from '@nestjs/common';
import { InternType } from './models/intern.type';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(private _repository: AppRepository) {}

  findAll(): Array<InternType> {
    return this._repository.findAll();
  }

  findOne(id: number): InternType | null {
    return this._repository.findOne(id);
  }
} */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInternDto } from 'src/dto/create-intern.dto';
import { Intern } from 'src/interfaces/intern.interface';
import { Model } from 'mongoose';
import { UpdateInternDto } from 'src/dto/update-intern.dto';
@Injectable()
export class AppService {
  constructor(@InjectModel('Intern') private internModel: Model<Intern>) {}

  async createIntern(createInternDto: CreateInternDto): Promise<Intern> {
    const newIntern = new this.internModel(createInternDto);
    return newIntern.save();
  }

  async updateIntern(internId: string, updateInternDto: UpdateInternDto): Promise<Intern> {
    const existingIntern = await this.internModel.findByIdAndUpdate(
      internId,
      updateInternDto,
      { new: true },
    );
    if (!existingIntern) {
      throw new NotFoundException(`Intern #${internId} not found`);
    }
    return existingIntern;
  }

  async getAllIntern(): Promise<Intern[]> {
    const internData = await this.internModel.find().sort({lastname: 1});
    if (!internData || internData.length == 0) {
      throw new NotFoundException('Interns data not found!');
    }
    return internData;
  }
  async getIntern(internId: string): Promise<Intern> {
    const existingIntern = await this.internModel.findById(internId).exec();
    if (!existingIntern) {
      throw new NotFoundException(`Intern #${internId} not found`);
    }
    return existingIntern;
  }

  async deleteIntern(internId: string): Promise<Intern> {
    const deletedIntern = await this.internModel.findByIdAndDelete(internId);
    if (!deletedIntern) {
      throw new NotFoundException(`Intern #${internId} not found`);
    }
    return deletedIntern;
  }
}
