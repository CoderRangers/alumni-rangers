/* eslint-disable @typescript-eslint/no-unused-vars */
/* import { InternType } from './models/intern.type';

export class InternRepository {
  private _interns: Array<InternType> = [];

  constructor() {
    this._populate();
  }

  findAll(): Array<InternType> {
    return this._interns;
  }

  findOne(id: number): InternType | null {
    return null;
  }

  add(intern: InternType): InternType {
    throw new Error('Not implemented yet');
  }

  delete(id: number): void {}

  update(intern: InternType): void {}

  /**
   * Just for mock purpose
   * Populate a list with some fixed datas (Fixture)
   
  private _populate(): void {
    this._interns.push({
      id: 1,
      lastname: 'Mauré',
      firstname: 'Julien',
      occupation: 'Stagiaire',
      company: {
        id: 1,
        name: 'Aélion',
      },
      poe: {
        id: 1,
        name: 'POEC dev Mobile',
        beginAt: new Date(2024, 5, 24),
        endAt: new Date(2024, 8, 24),
        type: 'POEC',
      },
    });

    this._interns.push({
      id: 2,
      lastname: 'Dupont',
      firstname: 'Antoine',
      occupation: `demi de mélée`,
      company: {
        id: 2,
        name: 'Stade Toulousain',
      },
      poe: {
        id: 1,
        name: 'POEC dev Mobile',
        beginAt: new Date(2024, 5, 24),
        endAt: new Date(2024, 8, 24),
        type: 'POEC',
      },
    });
  }
}
 */