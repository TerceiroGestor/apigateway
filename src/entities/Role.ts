import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn, 
    UpdateDateColumn, 
    DeleteDateColumn, 
    VersionColumn 
} from "typeorm";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn("uuid")
    id: string | undefined;

    @Column({type: "varchar", nullable: false })
    role: string | undefined

    @Column({type: "varchar", nullable: false })
    permissions: string | undefined

    @CreateDateColumn()
    createdDate: Date | undefined
    @UpdateDateColumn()
    updatedDate: Date | undefined
    @DeleteDateColumn()
    deletedDate: Date | undefined
    @VersionColumn()
    version: number | undefined
    user: any;

}