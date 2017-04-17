import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

// /*
//   Generated class for the Comment page.
//   See http://ionicframework.com/docs/v2/components/#navigation for more info on
//   Ionic pages and navigation.
// */

// class Comment {
//   title: string
//   body: string
//   id: string
//   date: string
//   constructor() {
//     this.date = new Date().toDateString();
//   }
// }

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {
//   comment: Comment = new Comment()
  
   constructor(public navCtrl: NavController, private navParams: NavParams, public af: AngularFire) {
    
   }

//   submit() {
//       this.af.database.list('/comments').push(this.comment)
//     this.comment = new Comment()
//     this.navCtrl.parent.select(0)
//   }
 }
