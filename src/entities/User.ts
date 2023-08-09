import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    VersionColumn,
    BeforeInsert
} from "typeorm";

import { Login } from './Login';
import { Log } from './Log';
import { userRepository } from "../repositories/userRepository";
import { LogService } from "../services/LogService";

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
    @OneToMany(() => Login, login => login.user)
    logins: Login[] | undefined;

    @OneToMany(() => Log, log => log.user)
    logs: Log[] | undefined;

    @BeforeInsert()
    async checkIfUserExists() {

        const user = await userRepository.findOneBy({ email: this.email });

        if (user) {

            new LogService().create(user, { message: `O usuário com o email ${this.email} já existe.`});
            throw new Error(`O usuário com o email ${this.email} já existe.`);

        }
    }
}