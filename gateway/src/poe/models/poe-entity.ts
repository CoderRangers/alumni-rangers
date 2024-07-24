import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
    name: 'poe',
})
export class PoeEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    type: string

    @Column()
    beginAt: Date

    @Column()
    endAt: Date
}
