import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.page.html',
  styleUrls: ['./research.page.scss'],
})
export class ResearchPage implements OnInit {
  users: any;

  constructor() { }

  ionViewWillEnter() {
    this.users = [
      {
        username: 'Yvan',
      },
      {
        username: 'Christophe',
      },
      {
        username: 'Maïlys',
      },
      {
        username: 'Arthur',
      },
      {
        username: 'Charly',
      },
      {
        username: 'Antho',
      }
    ];
  }

  ngOnInit() {
  }

}
