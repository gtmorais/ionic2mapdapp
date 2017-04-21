import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { CommentPage } from '../pages/comment/comment';
import { ProfesssorPage } from '../pages/professor/professor';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2'
import { ConnectionComponent } from '../components/connection/connection'
const config = {
   apiKey: "AIzaSyAyvKb-IlLxCwJq5hlQlf2ryT-koZKsT58",
    authDomain: "ionic2firebase-256cd.firebaseapp.com",
    databaseURL: "https://ionic2firebase-256cd.firebaseio.com",
    projectId: "ionic2firebase-256cd",
    storageBucket: "ionic2firebase-256cd.appspot.com",
    messagingSenderId: "1076253064474"
  };


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CommentPage,
    ProfesssorPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CommentPage,
    ProfesssorPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
