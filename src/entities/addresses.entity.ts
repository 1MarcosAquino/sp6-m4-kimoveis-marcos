import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { RealEstate } from './realEstate.entity';

@Entity('addresses')
export class Address {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 45 })
    street: string;

    @Column('varchar', { length: 8 })
    zipCode: string;

    @Column('varchar', { length: 7, nullable: true })
    number: string | null | undefined;

    @Column('varchar', { length: 20 })
    city: string;

    @Column('varchar', { length: 2 })
    state: string;

    @OneToOne(() => RealEstate)
    address: RealEstate;
}
