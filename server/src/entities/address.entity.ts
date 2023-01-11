import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('adresses')
class Address{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    zip_code: string

    @Column()
    country: string

    @Column()
    state: string
    
    @Column()
    city: string

    @Column()
    district: string
    
    @Column()
    street: string
    
    @Column()
    number: string
    
    @Column()
    complement: string
}

export {Address}
