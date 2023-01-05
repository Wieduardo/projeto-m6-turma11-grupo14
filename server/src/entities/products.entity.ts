import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './user.entity'

@Entity('products')
class Product{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    year: number

    @Column()
    kilometers: number

    @Column()
    ad_type: string

    @Column()
    price: string

    @ManyToOne(() => User, (User) => User.products)
    user: User

    @Column({nullable: true})
    comments: string

    @Column()
    vehicle_type: string

    @Column()
    images: string
}

export { Product }