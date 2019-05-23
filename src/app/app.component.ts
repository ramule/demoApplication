import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
//import { ExperimentPage } from '../pages/experiment/experiment';
//import {RegistrationPage } from '../pages/registration/registration';
//import { DemoLoginPage } from '../pages/demo-login/demo-login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  value: any = [];
  pages: any = [];

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public alertCtrl: AlertController) {
    platform.ready().then(() => {

      this.value = localStorage.getItem('SpecificUser')
      console.log("Value", this.value);
      if (this.value !== null) {
        this.rootPage = HomePage;
      }

      else {
        this.rootPage = LoginPage;
      }

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: "Home", Component: HomePage, icon: 'home' },
      { title: "Logout", Component: null, icon: 'log-out' }
    ];

  }

  OpenPage(page) {
    if (page.component == null) {
      let alert = this.alertCtrl.create({
        message: 'Are you sure you want to logout?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              localStorage.clear();
              this.nav.setRoot(LoginPage)
            }
          },
          {
            text: 'No',
            handler: () => {
              console.log("No clicked");
            }

          }
        ]
      })
      alert.present()
    }
    else {

      this.nav.setRoot(page.component)
    }

  }
}