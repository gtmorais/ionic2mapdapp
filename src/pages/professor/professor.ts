import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2'

@Component({
  selector: 'page-professor',
  templateUrl: 'professor.html'
})

export class ProfesssorPage {
content: FirebaseListObservable<any>
item: FirebaseObjectObservable<any>

  constructor(public navCtrl: NavController, public af: AngularFire,
    public actionSheetCtrl: ActionSheetController) {
    this.content = af.database.list('/content')
    this.item = af.database.object('/content/-Kgaulzbe7dHNjVFhban');

    console.log(this.item);

    //alert(this.content.subscribe(x => console.log(x.title)))
  }
}