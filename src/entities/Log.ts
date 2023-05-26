import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn, 
    UpdateDateColumn, 
    DeleteDateColumn, 
    VersionColumn 
} from "typeorm";

@Entity('logs')
export class Log {
    @PrimaryGeneratedColumn("uuid")
    id: string | undefined;

    @Column({type: 'json', nullable: true})
    clientinfo: string | undefined

    @Column({type: 'json', nullable: true})
    methodinfo: string | undefined

    @Column({type: 'json', nullable: true})
    action: string | undefined

    @CreateDateColumn()
    createdDate: Date | undefined
    @UpdateDateColumn()
    updatedDate: Date | undefined
    @DeleteDateColumn()
    deletedDate: Date | undefined
    @VersionColumn()
    version: number | undefined
}