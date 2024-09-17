import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CompanyCategory } from './company.type';
import { CompanyRating } from './company-rating.type';

@Entity({
  name: 'company',
})
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  type: CompanyCategory;

  @Column()
  medianRating: CompanyRating;

  @Column()
  logo?: string;
}
