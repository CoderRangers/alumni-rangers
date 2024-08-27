import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InternTransformer } from 'src/app/core/types/intern/intern-transformer';

@Component({
  selector: 'app-intern-header',
  templateUrl: './intern-header.component.html',
  styleUrls: ['./intern-header.component.scss'],
})
export class InternHeaderComponent   {

  @Input()
  intern!: InternTransformer;

  @Input()
  index!: number;

  constructor(
    private _router: Router,
  ) { }

  ngOnInnit(): void {
  }

  showDetail(id: string): void {
    //console.log("click : " + id)
    this._router.navigate(['intern',id])    
  }
}
