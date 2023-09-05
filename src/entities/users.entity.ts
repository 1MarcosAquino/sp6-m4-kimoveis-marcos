import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    CreateDateColumn,
    BeforeInsert,
    BeforeUpdate,
    OneToMany,
} from 'typeorm';

import { hashSync, getRounds } from 'bcryptjs';
import { Schedule } from './schedules.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 45 })
    name: string;

    @Column('varchar', { length: 45, unique: true })
    email: string;

    @Column({ default: false, nullable: true })
    admin: boolean;

    @Column('varchar', { length: 120 })
    password: string;

    @CreateDateColumn({ type: 'date' })
    createdAt: string;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @DeleteDateColumn({ type: 'date', nullable: true })
    deletedAt?: string | null | undefined;

    @OneToMany(() => Schedule, (schedule) => schedule.user)
    schedule: Schedule[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const incrypt = getRounds(this.password);
        if (!incrypt) this.password = hashSync(this.password, 10);
    }
}
