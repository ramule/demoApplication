import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MyProvider } from '../providers/my/myFirebase';

import { Facebook } from '@ionic-native/facebook';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import {NgxQRCodeModule} from 'ngx-qrcode2';

//import {AngularFireModule, FirebaseApp} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { RegistrationPage } from '../pages/registration/registration';
//import { HttpClientModule } from '@angular/common/http';
//import { HttpModule } from '@angular/http';
import firebase from 'firebase';
import { DemoLoginPage } from '../pages/demo-login/demo-login';
import { DemoRegisterPage } from '../pages/demo-register/demo-register';
//import { FormGroup, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import{ AngularFireModule } from 'angularfire2';
import{ AngularFireAuthModule } from 'angularfire2/auth';
import { ExperimentPage } from '../pages/experiment/experiment';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCMyYbqPSupTQ33VTB7a2oaC4ZNkgWW_qo",
    authDomain: "demoapplication-be46c.firebaseapp.com",
    databaseURL: "https://demoapplication-be46c.firebaseio.com",
    projectId: "demoapplication-be46c",
    storageBucket: "demoapplication-be46c.appspot.com",
    messagingSenderId: "83051892215"
  };
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    DemoLoginPage,
    DemoRegisterPage,
    ExperimentPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegistrationPage,
    HomePage,
    LoginPage,
    DemoLoginPage,
    DemoRegisterPage,
    ExperimentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MyProvider,
    Facebook,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule { }
