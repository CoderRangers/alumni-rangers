import { Component, Input, OnInit } from '@angular/core';
import { InternType } from 'src/app/core/types/intern-type';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss'],
})
export class InternComponent  implements OnInit {

  @Input()
  intern!: InternType

  constructor() { }

  ngOnInit() {}

}
