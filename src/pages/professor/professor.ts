import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable  } from 'angularfire2'

@Component({
  selector: 'page-professor',
  templateUrl: 'professor.html'
})

export class ProfesssorPage implements OnInit {
  professorsFB: FirebaseListObservable<any>;
  teachers : any;
  parameter : string;
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController,
              public af: AngularFire,
              private navParams: NavParams) {
      this.professorsFB = af.database.list('/teachers'); 

      var parameter = navParams.get('data'); 
      if (parameter && parameter.trim() != "")
        this.parameter = parameter;
  }

  ngOnInit() {
      this.professorsFB.subscribe(teachers => {
        console.log(teachers);
        this.teachers = teachers;
      });

      if (this.parameter)
      {
          // this.teachers = this.teachers.filter((teachers) => {
          //   return (teachers.name.indexOf(this.parameter) > -1);
          // });
      }
  }

  getItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.teachers = this.teachers.filter((teachers) => {
        return (teachers.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else
    {
        this.professorsFB.subscribe(teachers => {
          console.log(teachers);
          this.teachers = teachers;
        });
    }
  }

}
