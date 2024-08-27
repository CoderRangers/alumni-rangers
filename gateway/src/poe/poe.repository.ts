import { PoeType } from './models/poe.type';

export class PoeRepository {
  private _poe: Array<PoeType> = [];

  constructor() {
    this._populate();
  }

  find(): Array<PoeType> {
    return this._poe;
  }

  _populate() {
    this._poe.push({
      id: 1,
      beginAt: new Date(2024, 6, 10),
      endAt: new Date(2024, 9, 10),
      name: 'dev mobile',
      type: 'POEC',
    });
  }
}
