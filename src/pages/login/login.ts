import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RegistrationPage } from '../registration/registration';
import { MyProvider } from '../../providers/my/myFirebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  // username: any = null;
  // password: any = null;

  LoginForm: FormGroup;
  registeredUsers: FirebaseListObservable<any[]>
  userList: any = [];
  specificUser: any;
  id: any;
  check: boolean;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public myProvider: MyProvider,
    private facebook: Facebook) {

    this.LoginForm = formBuilder.group({
      username: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])],

    })

    this.registeredUsers = this.myProvider.getAllUsers();
    console.log("Data", this.registeredUsers);
    this.registeredUsers.subscribe(Response => {
      this.userList = Response;
      console.log("Database = ", this.userList);
    })
  }

  login() {
    //ye ek type ka validation
    /*  console.log(this.password);
      if(this.username==null && this.password==null){
  console.log('please enter username');
      }*/
    //  else{
    try {
      var counter = 0;
      this.userList.forEach(element => {
        if (this.LoginForm.value.username === element.username && this.LoginForm.value.password === element.password) {
          this.specificUser = element;
          counter = 1;
        }

      })
      if (counter > 0) {
        let alert = this.alertCtrl.create({
          title: 'LoggedIn successfully!',
          subTitle: 'You are successfully logged into application!',
          buttons: ['OK']
        });
        alert.present()
        this.navCtrl.setRoot(HomePage);
        console.log("Specific USer", this.specificUser)
        localStorage.setItem("SpecificUser", JSON.stringify(this.specificUser))
        localStorage.setItem("UserKey", this.specificUser.$key)
      }

      else {
        let alert = this.alertCtrl.create({
          title: 'Oops! Login Failed',
          subTitle: 'Enter Correct Username and Password!',
          buttons: ['OK']
        });
        alert.present()

      }
    }
    finally {

    }
  }

  Register() {
    this.navCtrl.setRoot(RegistrationPage);
  }

  loginWithFb() {

    this.facebook.login(["email"]).then((loginResponse) => {
      let credentials = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
      firebase.auth().signInWithCredential(credentials).then((info) => {
        alert(JSON.stringify(info));
        this.navCtrl.push(HomePage);
      })
    })
  }

  ionViewWillLeave() {

  }
  ionViewDidEnter() {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    /* if(this.username==null && this.password==null){
      this.check = true;
    }
    else
      this.check = false; */
  }

}
