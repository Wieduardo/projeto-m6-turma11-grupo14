import {Column,CreateDateColumn,Entity,ManyToOne,PrimaryGeneratedColumn,} from "typeorm";
import { Product } from "./products.entity";
import { User } from "./user.entity";

@Entity('comment')
class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @ManyToOne(() => User, (User) => User.comments)
  user: User;

  @ManyToOne(() => Product, (Product) => Product.comments)
  product: Product;
}

export {Comment}