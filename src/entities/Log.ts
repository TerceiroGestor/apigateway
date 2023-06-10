import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    VersionColumn,
    ManyToOne, JoinColumn
} from "typeorm";

import { User } from './User';

@Entity('logs')
export class Log {
    @PrimaryGeneratedColumn("uuid")
    id: string | undefined;

    @Column('uuid', { unique: false })
    user_id: string | undefined

    @Column({ type: 'json', nullable: true })
    customerInfo: string | undefined

    @Column({ type: 'json', nullable: true })
    requestInfo: string | undefined

    @CreateDateColumn()
    created: Date | undefined
    @UpdateDateColumn()
    updated: Date | undefined
    @DeleteDateColumn()
    deleted: Date | undefined
    @VersionColumn()
    version: number | undefined

    @ManyToOne(() => User, user => user.logs)
    @JoinColumn({ name: 'user_id' })
    user: User | undefined;
}