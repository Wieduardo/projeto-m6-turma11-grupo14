import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from 'typeorm'
import { Product } from './products.entity'

@Entity('users')
class User{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    name: string

    @Column({ length: 120})
    password: string

    @Column({unique: true})
    email: string

    @Column()
    phone: string

    @OneToMany((type) => Product, (Product) => Product.user,{
        onDelete: "SET NULL",
        nullable: true 
    })
    products: Product[]

    @CreateDateColumn()
    createdAt: Date

}

export {User}