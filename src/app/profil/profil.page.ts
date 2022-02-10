import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  data: any;

  constructor() { }

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
