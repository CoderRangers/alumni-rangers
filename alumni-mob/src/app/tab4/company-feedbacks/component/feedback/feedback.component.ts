import { Component, Input, OnInit } from '@angular/core';
import { CompanyFeedbackType } from 'src/app/core/types/company-feedback/company-feedback.type';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent  implements OnInit {

  @Input()
  public feedback!: CompanyFeedbackType;
  @Input()
  public index!:number;

  public hide: boolean = true;

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  showAll() {
    this.hide = !this.hide;
  }

}
