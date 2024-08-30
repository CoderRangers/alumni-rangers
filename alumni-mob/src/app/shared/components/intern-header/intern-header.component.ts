import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InternType } from 'src/app/core/types/intern/intern-type';

@Component({
  selector: 'app-intern-header',
  templateUrl: './intern-header.component.html',
  styleUrls: ['./intern-header.component.scss'],
})
export class InternHeaderComponent   {

  @Input()
  intern!: InternType;

  @Input()
  index!: number;

  constructor(
    private _router: Router,
  ) { }

  ngOnInnit(): void {
  }

  showDetail(id: string | undefined): void {
    // console.log("click : " + id)
    this._router.navigate(['intern', id])
  }
}
