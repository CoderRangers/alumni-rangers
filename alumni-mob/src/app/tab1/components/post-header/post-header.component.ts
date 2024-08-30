import { Component, Input, OnInit } from '@angular/core';
import { InternType } from 'src/app/core/types/intern-type';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss'],
})
export class PostHeaderComponent  implements OnInit {

  @Input()
  intern!: InternType

  constructor() { }

  ngOnInit() {}

}
