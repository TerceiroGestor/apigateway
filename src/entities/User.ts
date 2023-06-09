import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    VersionColumn
} from "typeorm";

import { Login } from './Login';
import { Log } from './Log';

@Entity('users')

export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string | undefined

    @Column({ type: "varchar", nullable: false })
    firebase_uid: string | undefined;
    
    @Column({ type: "varchar", nullable: false })
    name: string | undefined

    @Column({ type: "varchar", nullable: false })
    social_name: string | undefined

    @Column({ type: "varchar", nullable: false })
    lastname: string | undefined

    @Column({ type: "varchar", nullable: false })
    email: string | undefined

    @Column({ type: "varchar", nullable: false })
    password: string | undefined

    @Column({ type: "date", nullable: false })
    birth: Date | undefined

    @CreateDateColumn()
    created: Date | undefined
    @UpdateDateColumn()
    updated: Date | undefined
    @DeleteDateColumn()
    deleted: Date | undefined
    @VersionColumn()
    version: number | undefined

    // relationship
    @OneToMany(() => Login, login => login.user)
    logins: Login[] | undefined;
  
    @OneToMany(() => Log, log => log.user)
    logs: Log[] | undefined;
}