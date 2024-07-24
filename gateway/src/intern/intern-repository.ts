import { InternType } from './models/intern.type'

export class InternRepository {
    private _interns: Array<InternType> = []

    constructor() {
        this._populate()
    }

    findAll(): Array<InternType> {
        return this._interns
    }

    findOne(id: number): InternType | null {
        return null
    }

    add(intern: InternType): InternType {
        throw new Error('Not implemented yet')
    }

    delete(id: number): void {}

    update(intern: InternType): void {}

    /**
     * Just for mock purpose
     * Populate a list with some fixed data (Fixture)
     */
    private _populate(): void {
        this._interns.push({
            id: 1,
            lastname: 'Aubert',
            firstname: 'Jean-Luc',
            occupation: 'Formateur',
            company: {
                id: 1,
                name: 'Aélion',
            },
            poe: {
                id: 1,
                name: 'Dev Mobile',
                type: 'POEC',
                beginAt: new Date(2024, 5, 24),
                endAt: new Date(2024, 9, 24),
            },
        })
        this._interns.push({
            id: 2,
            lastname: 'Moussaoui',
            firstname: 'Ibrahym',
            occupation: 'Recruteur',
            company: {
                id: 1,
                name: 'Aélion',
            },
            poe: {
                id: 2,
                name: 'Dev Cybersécurité',
                type: 'POEI',
                beginAt: new Date(2024, 1, 1),
                endAt: new Date(2024, 3, 31),
            },
        })
    }
}
