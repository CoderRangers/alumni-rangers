import { Component } from '@angular/core';
import { StorageService } from '../core/services/storage.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private _storageService: StorageService,
    private _router: Router,
    private _alertController: AlertController
  ) {}

  logOut(): void {
    this._storageService.remove('auth')
    this._router.navigate(['/', 'login'])
  }

  private _logoutConfirmAlertButtons = [
    {
      text: 'Annuler',
      role: 'cancel',
      handler: () => {
        console.log('Log out canceled')
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.logOut()
        console.log('Log out confirmed')
      },
    },
  ]

  async presentLogoutAlert() {
    const alert = await this._alertController.create({
      header: 'Déconnexion ?',
      // subHeader: 'A Sub Header Is Optional',
      message: 'Êtes-vous sûr·e de vouloir vous déconnecter ?',
      buttons: this._logoutConfirmAlertButtons,
    });

    await alert.present();
  }
}
