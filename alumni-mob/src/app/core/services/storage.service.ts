import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storageEngine = localStorage
  private _storageIndexedDb = indexedDB.open('log', 1)

  constructor() { }

  store(key: string, value: any): void {
    const data: string = JSON.stringify(value)
    this._storageEngine.setItem(key, data)
  }

  retrieve(key: string): any | null {
    const rowData: string | null = this._storageEngine.getItem(key)
    return rowData ? JSON.parse(rowData) : rowData
  }

  remove(key: string): void {
    this._storageEngine.removeItem(key)
  }
}
