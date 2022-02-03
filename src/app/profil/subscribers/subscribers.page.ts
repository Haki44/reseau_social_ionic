import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.page.html',
  styleUrls: ['./subscribers.page.scss'],
})
export class SubscribersPage implements OnInit {
  type: string;
  constructor() { }

  ngOnInit() {
    this.type = 'abonnes';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
