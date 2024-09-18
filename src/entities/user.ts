import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base";

@Entity()
export class User extends BaseEntity {
    @Column({type: 'bigint', nullable: false, unique: true})
    telegram_id: number;

    @Column({type: 'text', nullable: true})
    username?: string;

    @Column({type: 'text', nullable: false})
    first_name: string;

    @Column({type: 'text', nullable: true})
    last_name?: string;

    @Column({type: 'text', nullable: true})
    language_code?: string;
}