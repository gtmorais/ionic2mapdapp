import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfesssorPage } from "../professor/professor";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})


export class AboutPage {
public data: Data[];
professsorPage : ProfesssorPage

  constructor(public navCtrl: NavController, ) {

  }

  toggleDetails(data: string) {
          alert(data);
          // if (data.showDetails) {
          //     data.showDetails = false;
          // } else {
          //     data.showDetails = true;
          // }
          
        this.navCtrl.push(ProfesssorPage, { data: data });

      }
}


export class Data {
    constructor(public title: string, public details: string, public showDetails: boolean) {}
}