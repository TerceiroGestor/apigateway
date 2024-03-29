import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    VersionColumn,
    ManyToOne,
    JoinColumn,

} from 'typeorm';

import { User } from './User';

@Entity('auths')
export class Auth {
    @PrimaryGeneratedColumn('uuid')
    id: string | undefined;

    @Column('uuid', { unique: false })
    user_id: string | undefined

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

    @ManyToOne(() => User, user => user.auths)
    @JoinColumn({ name: 'user_id' })
    user: User | undefined;

}