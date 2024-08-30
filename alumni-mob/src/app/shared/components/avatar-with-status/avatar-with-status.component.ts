import { Component, Input, OnInit } from '@angular/core';
import { InternType } from 'src/app/core/types/intern/intern-type';

@Component({
  selector: 'app-avatar-with-status',
  templateUrl: './avatar-with-status.component.html',
  styleUrls: ['./avatar-with-status.component.scss'],
})
export class AvatarWithStatusComponent  implements OnInit {

  @Input()
  public intern!: InternType

  public isOnline: boolean = false

  constructor() { }

  ngOnInit() {}

}
