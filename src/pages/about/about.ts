import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})


export class AboutPage {
public data: Data[];

  constructor(public navCtrl: NavController) {

  }

  toggleDetails(data: string) {
          alert(data);
          // if (data.showDetails) {
          //     data.showDetails = false;
          // } else {
          //     data.showDetails = true;
          // }
      }
}


export class Data {
    constructor(public title: string, public details: string, public showDetails: boolean) {}
}