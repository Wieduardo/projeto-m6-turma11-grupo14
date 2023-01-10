import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn} from 'typeorm'
import { Comment } from './comment.entity'
import { Product } from './products.entity'
import { Address } from './address.entity'

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

    @OneToOne(() => Address, {eager: true}) @JoinColumn()
    address: Address

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

    @OneToMany(() => Comment, (Comment) => Comment.user,{onDelete: "SET NULL"})
    comments: Comment[]

    @Column({nullable: true})
    bids: string

}

export {User}