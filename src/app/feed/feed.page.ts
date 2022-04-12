import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  posts: any;

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

  ionViewWillEnter() {
    this.posts = [
      {
        username: 'Username',
        desc: 'Keep close to Nature\'s heart... and break clear away, once in awhile.',
        img: '../../assets/icon/ski.jpg',
        com: '256',
        like: '362',
      },
      {
        username: 'Oui',
        desc: 'woods. Wash your spirit clean.',
        img: '../../assets/icon/ski.jpg',
        com: '256',
        like: '362',
      }
    ];
  }

  ngOnInit() {
  }

}
