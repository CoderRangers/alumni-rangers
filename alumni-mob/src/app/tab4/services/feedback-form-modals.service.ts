import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackFormModalsService {

  public modalIds!: Array<string>

  constructor() {
    this.modalIds = []
  }
}
