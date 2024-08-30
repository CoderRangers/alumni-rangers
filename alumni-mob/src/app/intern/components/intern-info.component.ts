import { Component, inject, Input, OnInit } from '@angular/core';
import { InternType } from 'src/app/core/types/intern/intern-type';

@Component({
  selector: 'app-intern-info',
  templateUrl: './intern-info.component.html',
  styleUrls: ['./intern-info.component.scss'],
})
export class InternInfoComponent  implements OnInit {

  @Input()
  public intern!: InternType;

  constructor() { }

  ngOnInit() {}
}
