import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    VersionColumn,
} from "typeorm";

import { Auth } from './Auth';

@Entity('users')

export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string | undefined

    @Column({ type: "varchar", nullable: false })
    auth_id: string | undefined;

    @Column({ type: "varchar", nullable: false })
    name: string | undefined

    @Column({ type: "varchar", nullable: false })
    social_name: string | undefined

    @Column({ type: "varchar", nullable: false })
    lastname: string | undefined

    @Column({ type: "varchar", nullable: false })
    email: string | undefined

    @Column({ type: "boolean", nullable: false })
    email_verified: boolean | undefined

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
    @OneToMany(() => Auth, auth => auth.user)
    logins: Auth[] | undefined;
    auths: any;
}