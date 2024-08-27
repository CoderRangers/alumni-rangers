/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent  implements OnInit {

  constructor(
    private _storage: StorageService, 
    private _router: Router, 
    private _alertController: AlertController
  ) { }

  ngOnInit() {
    
  }

  async presentAlert() {
    const alert = await this._alertController.create({
      header: 'Déconnexion',
      // subHeader: 'A Sub Header Is Optional',
      message: 'Voulez vous vraiment vous déconnecter ? ',
      buttons: this.alertButtons,
    });

    await alert.present();
  }

  logout(): void {
    this._storage.remove('auth')
    this._router.navigate(['/','login'])
  }

  public alertButtons = [
    {
      text: 'Oui',
      role: 'oui',
      handler: () => {
        this.logout()
      },
    },
    {
      text: 'Non',
      role: 'cancel',
      handler: () => {
        console.log('fire')
      },
    },
  ];

}
