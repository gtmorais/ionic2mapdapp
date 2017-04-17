import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2'
//import { PageModel } from "../../models/pagemodel";
//import { Subscription } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
content: FirebaseListObservable<any>
item: FirebaseObjectObservable<any>
item2: FirebaseObjectObservable<any>
 //private subscription: Subscription;

  constructor(public navCtrl: NavController, public af: AngularFire,
    public actionSheetCtrl: ActionSheetController) {
    this.content = af.database.list('/content')
    this.item = af.database.object('/content/-Kgaulzbe7dHNjVFhban');

    console.log(this.item);

    //alert(this.content.subscribe(x => console.log(x.title)))
  }
}