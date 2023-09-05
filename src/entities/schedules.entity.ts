import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User, RealEstate } from '.';

@Entity('schedules')
export class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'date' })
    date: Date | string;

    @Column({ type: 'time' })
    hour: Date | string;

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate;

    @ManyToOne(() => User, (user) => user.schedule)
    user: User;
}
