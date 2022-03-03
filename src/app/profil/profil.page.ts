import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  data: any;

  constructor(public toastController: ToastController, public alertController: AlertController, public navCtrl: NavController) {}

  // alerte pour la deconnexion
  async deconnexionAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Etes vous sur de vouloir vous déconnecter ?</strong> <ion-icon name="log-out"></ion-icon>',
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
            this.navCtrl.navigateRoot('/auth/login');
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async followToast() {
    const toast = await this.toastController.create({
      message: '<ion-icon name="arrow-redo"></ion-icon><br>Vous avez follow une personne.',
      duration: 1500,
      buttons: [{
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    },);
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'username': 'Maxence Bannier',
        'photo': 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg',
        'nb_publications': '6',
        'subscribers': '253',
        'subscriptions': '185',
        'photo_publication': '../../assets/icon/chat1.jpg',
      };
    }, );
  }

  ngOnInit() {
  }

}
