import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modif-password',
  templateUrl: './modif-password.page.html',
  styleUrls: ['./modif-password.page.scss'],
})
export class ModifPasswordPage implements OnInit {

  constructor(public alertController: AlertController, public navCtrl: NavController) {}

  // alerte pour le changement de mdp
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm !',
      message: '<strong>Voulez vous vraiment changer de mot de passe ?</strong><ion-icon name="lock-closed"></ion-icon>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            this.navCtrl.navigateRoot('profil/edit');
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
