import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';
import { CompanyFeedbackType } from 'src/app/core/types/company-feedback/company-feedback.type';
import { TokenInfoType } from 'src/app/core/types/login/token-type';

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

  @Input()
  public hide: boolean = true;
  constructor(
    private _router: Router
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  goToProfile() {
    this._router.navigate(['intern', this.feedback.internId]);
  }

  showAll() {
    this.hide = !this.hide;
  }
}
