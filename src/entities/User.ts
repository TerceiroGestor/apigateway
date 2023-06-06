import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    OneToOne,
    JoinColumn,
    CreateDateColumn, 
    UpdateDateColumn, 
    DeleteDateColumn, 
    VersionColumn 
} from "typeorm";

import { Role } from "./Role"

@Entity('users')

export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string | undefined

    @OneToOne(() => Role, role => role.user)
    @JoinColumn({name: 'role_id'})
    role: Role | undefined

    @Column({type: "varchar", nullable: false })
    firstName: string | undefined

    @Column({type: "varchar", nullable: false })
    lastName: string | undefined

    @CreateDateColumn()
    createdDate: Date | undefined
    @UpdateDateColumn()
    updatedDate: Date | undefined
    @DeleteDateColumn()
    deletedDate: Date | undefined
    @VersionColumn()
    version: number | undefined
}