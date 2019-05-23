import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from 'firebase';
import { DemoRegisterPage } from '../demo-register/demo-register';
import { AngularFireAuth } from 'angularfire2/auth';
//import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-demo-login',
  templateUrl: 'demo-login.html',
})

export class DemoLoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    public alert: AlertController) {
  }

  login(user) {

    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
   /*  if (result) {
       let alert = this.alert.create({
         title: 'Login Successful',
         subTitle: 'You are successfully logged in',
         buttons: ['ok']
       });
       alert.present();
    this.navCtrl.push(HomePage);*/
    user.email = "";
    user.password = "";
  }

  /*  else {
      let alert = this.alert.create({
        title: 'Login Failure',
        subTitle: 'Please register first',
        buttons: ['ok']
      });
      alert.present();
      this.navCtrl.push(DemoLoginPage);
      user.email = "";
      user.password = "";
    }*/

register(){
  this.navCtrl.push(DemoRegisterPage);
}
ionViewDidLoad() {
  console.log('ionViewDidLoad DemoLoginPage');
}

}
