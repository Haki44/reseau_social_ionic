import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.page.html',
  styleUrls: ['./research.page.scss'],
})
export class ResearchPage implements OnInit {
  data: any;
  
  constructor() { }

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
