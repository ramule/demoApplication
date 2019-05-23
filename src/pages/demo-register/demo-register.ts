import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { DemoLoginPage } from '../demo-login/demo-login';

@IonicPage()
@Component({
  selector: 'page-demo-register',
  templateUrl: 'demo-register.html',
})
export class DemoRegisterPage {

  user = {} as User;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public alert: AlertController) {
  }

  register(user) {
    console.log(user.email);
    console.log(user.password);
    const res = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    if (res) {
      let alert = this.alert.create({
        title: 'Registered success',
        subTitle: 'You are successfully login',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push(DemoLoginPage);
      user.email = "";
      user.password = "";
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoRegisterPage');
  }

}
