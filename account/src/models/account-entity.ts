import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Role {
  INTERN = 'intern',
  ADMIN = 'admin',
  SUPERADMIN = 'superadmin',
}
@Entity({
  name: 'account',
})
export class AccountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.INTERN,
  })
  role: Role;

  @Column()
  isActivated: boolean;

  @Column()
  internId: string;
}
