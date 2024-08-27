/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'poe'
})
export class PoeEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'date'})
    beginAt: Date

    @Column({type: 'date'})
    endAt: Date

    @Column({length: 75})
    name: string

    @Column({length: 50})
    type: string
}