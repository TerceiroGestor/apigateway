import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    VersionColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';

import { User } from './User';

@Entity('logins')
export class Login {
    @PrimaryGeneratedColumn('uuid')
    id: string | undefined;

    @Column('uuid', { unique: false })
    user_id: string | undefined

    @Column({ type: "varchar", nullable: false })
    firebase_uid: string | undefined;

    @Column('varchar', { nullable: true })
    email: string | undefined;

    @Column('boolean')
    emailVerified: boolean | undefined;

    @Column('text')
    accessToken: string | undefined;

    @Column('json', { nullable: true })
    accessInfo: string | undefined

    @CreateDateColumn()
    created: Date | undefined
    @UpdateDateColumn()
    updated: Date | undefined
    @DeleteDateColumn()
    deleted: Date | undefined
    @VersionColumn()
    version: number | undefined

    @ManyToOne(() => User, user => user.logins)
    @JoinColumn({ name: 'user_id' })
    user: User | undefined;
}