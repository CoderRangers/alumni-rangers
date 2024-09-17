import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CompanyRating } from './company-rating.type';
import { CompanyType } from './company.type';

@Entity({
  name: 'company-feedback',
})
export class CompanyFeedbackEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  company: CompanyType;

  @Column()
  feedbackTitle: string;

  @Column()
  rating: CompanyRating;

  @Column()
  feedbackText: string;

  @Column()
  jobTitle: string;

  @Column()
  jobStartDate: Date;

  @Column()
  jobEndDate: Date;

  @Column()
  salaryLow?: number;

  @Column()
  salaryHigh?: number;

  @Column()
  postedAt: Date;

  @Column()
  lastname: string;

  @Column()
  firstname: string;

  @Column()
  internId: string;
}
