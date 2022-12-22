import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

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

    @Column()
    user: string

    @Column({nullable: true})
    comments: string

    @Column()
    vehicle_type: string

    @Column()
    images: string[]
}

export { Product }