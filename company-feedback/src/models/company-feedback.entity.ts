import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CompanyRating } from './company-rating.type';
//import { CompanyType } from './company.type';
import { CompanyEntity } from './company.entity';
import { SalaryFormat } from './salary-format.type';

@Entity({
  name: 'company-feedback',
})
export class CompanyFeedbackEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => CompanyEntity, (company) => company)
  company: CompanyEntity;

  @Column()
  feedbackTitle: string;

  @Column({
    type: 'enum',
    enum: CompanyRating,
  })
  rating: CompanyRating;

  @Column({ type: 'longtext' })
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

  @Column({
    type: 'enum',
    enum: SalaryFormat,
  })
  salaryFormat?: SalaryFormat;

  @Column()
  postedAt: Date;

  @Column()
  lastname: string;

  @Column()
  firstname: string;

  @Column()
  internId: string;
}
