import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity("pessoanode")
export class pessoanode{
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    nome!: string;
    @Column()
    cidade!: string;
}