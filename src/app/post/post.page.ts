import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  data: any;

  constructor(public toastController: ToastController) {}

  async likeToast() {
    const toast = await this.toastController.create({
      message: '<ion-icon name="heart"></ion-icon><br>Vous avez liké un post.',
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

  async comToast() {
    const toast = await this.toastController.create({
      message: '<ion-icon name="chatbubble"></ion-icon><br>Vous avez commenté un post.',
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
        'username': 'Username',
        'description': ' Keep close to Nature\'s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.',
        'img': '../../assets/icon/ski.jpg',
        'com': '256',
        'like': '362',
      };
    }, );
  }

  ngOnInit() {
  }

}
