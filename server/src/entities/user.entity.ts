import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,OneToMany} from 'typeorm'
import { Product } from './products.entity'

@Entity('users')
class User{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column({ length: 120})
    password: string

    @Column()
    cellphone: string

    @Column()
    address: string

    @Column()
    cpf: string

    @Column()
    birthdate: string

    @Column()
    is_seller: boolean

    @Column({ default: true })
	isActive: boolean;

    @CreateDateColumn({ name:"date_joined"})
    date_joined: Date

    @UpdateDateColumn({ name: "updated_at"})
    updated_at: Date

    @OneToMany(() => Product, (Product) => Product.user,{
        onDelete: "SET NULL"
    })
    products: Product[]

    @Column({nullable: true})
    comments: string

    @Column({nullable: true})
    bids: string

}

export {User}