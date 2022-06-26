import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({
    length: '50',
  })
  name: string;
  @CreateDateColumn()
  createAt?: Date;
  @UpdateDateColumn()
  updatedAt?: Date;
}
