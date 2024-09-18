import { Component, Input, OnInit } from '@angular/core';
import { CompanyType } from 'src/app/core/types/company-feedback/company-feed.type';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent  implements OnInit {

  @Input()
  public company!: CompanyType

  constructor() { }

  ngOnInit() {}

}
