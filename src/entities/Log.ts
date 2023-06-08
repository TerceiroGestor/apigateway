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
    request: string | undefined

    @Column({type: 'json', nullable: true})
    action: string | undefined

    @CreateDateColumn()
    created: Date | undefined
    @UpdateDateColumn()
    updated: Date | undefined
    @DeleteDateColumn()
    deletedAt: Date | undefined
    @VersionColumn()
    version: number | undefined
}