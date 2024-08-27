import { Injectable } from '@angular/core';
import { InternType } from '../types/intern/intern-type';
import { InternTransformer } from '../types/intern/intern-transformer';

@Injectable({
  providedIn: 'root'
})
export class InternService {
  private _interns: Array<InternTransformer> = []

  constructor() {
  }

  public findAll(): Array<InternTransformer> {
    return [... this._interns]
  }

/*   private _setInterns(): void {
    this._interns = [
    {
      lastname: 'Aubert',
      firstname: 'Jean-Luc',
      occupation: 'Formateur',
      company: {
        name: 'Aélion'
      },
      poe: {
        name: 'Dev Mobile',
        beginAt: new Date(2024, 5, 24),
        endAt: new Date(2024, 8, 24)
      }
    },
    {
      lastname: 'Talut',
      firstname: 'Jean',
      occupation: 'Intern',
      company: {
        name: 'Aélion'
      },
      poe: {
        name: 'Dev Mobile',
        beginAt: new Date(2024, 5, 24),
        endAt: new Date(2024, 8, 24)
      }
    },
    {
      lastname: 'Talut',
      firstname: 'Jean',
      occupation: 'Intern',
      company: {
        name: 'Aélion'
      },
      poe: {
        name: 'Dev Mobile',
        beginAt: new Date(2024, 5, 24),
        endAt: new Date(2024, 8, 24)
      }
    }
  ]
  } */
}
