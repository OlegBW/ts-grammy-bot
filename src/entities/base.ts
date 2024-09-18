import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @CreateDateColumn({name: 'create_at'})
    createAt: Date;

    @UpdateDateColumn({name: 'update_at'})
    updateAt: Date;
}