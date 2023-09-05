import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { Category } from './categories.entity';
import { Address } from './addresses.entity';
import { Schedule } from './schedules.entity';

@Entity('real_estate')
export class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('boolean', { default: false, nullable: true })
    sold: Boolean;

    @Column('decimal', { default: 0, nullable: true })
    value: number | string;

    @Column('integer')
    size: number;

    @CreateDateColumn({ type: 'date' })
    createdAt: string | Date;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string | Date;

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Schedule[];

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category)
    @JoinColumn()
    category: Category;
}
