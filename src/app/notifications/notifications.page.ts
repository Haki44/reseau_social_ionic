import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifs: any;

  constructor() { }

  ionViewWillEnter() {
    this.notifs = [
      {
        username: 'Yvan Brai',
        object: 'Vous a identifier sur un post',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      },
      {
        username: 'Antho Lopez',
        object: 'Vous a identifier sur un post',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      }
    ];
  }

  ngOnInit() {
  }

}
