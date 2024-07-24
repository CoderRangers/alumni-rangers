import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
    name: 'post', // name the created table as 'post', in the db
})
export class PostEntity {
    @PrimaryGeneratedColumn() // each time an entry is added in the db, it will assign it an auto-generated id, in the appopriate column
    id: number

    @Column({ length: 75 })
    title: string

    @Column()
    postedAt: Date

    @Column({ type: 'text' })
    content: string

    /**
     * @todo move to OneToMany
     */
    @Column()
    media: string

    /**
     * @todo Either move to ManyToOne or enum
     */
    @Column()
    type: string

    @Column()
    author: string
}
