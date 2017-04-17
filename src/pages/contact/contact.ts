import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2'
//import { CommentPage } from "../comment/comment";
//import { Alert } from 'ionic/ionic';

@Component({
   selector: 'page-contact',
   templateUrl: 'contact.html'
})

export class ContactPage {
  comments: FirebaseListObservable<any>

  constructor(public navCtrl: NavController, public af: AngularFire,
    public alertCtrl: AlertController, 
    public actionSheetCtrl: ActionSheetController) {
    //this.comments = af.database.list('/comments')
  }

   showOptions(itemId, value){
    let actionSheet = this.actionSheetCtrl.create(
      {
        title:"Options:",
        buttons:[
          {
            text:"Delete",
            icon:"ios-trash",
            role:"destructive",
            // handler:()=>{
            //   this.removeItem(itemId);
            // }
          },
          {
            text:"Cancel",
            icon:"ios-close",
            role: "cancel",
            handler:()=>{
              console.log("Cancel");
            }
          }
        ]
      }
    );
    actionSheet.present();
  }

  // removeItem(itemId: string){
  //   console.log(itemId);
  //   this.comments.remove(itemId);
  // }

  updateItem(item, v){
    //   this.navCtrl.push(NotePage, {
    //     param1: item
    // });
  };
}
