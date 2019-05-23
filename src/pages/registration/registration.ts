import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MyProvider } from '../../providers/my/myFirebase';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  userList: any = [];
  registerForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public view: ViewController,
    public myProvider: MyProvider) {
    this.registerForm = formBuilder.group({
      username: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.compose([Validators.required])],
      name: ["", Validators.compose([Validators.required, Validators.minLength(10)])],
      contact: ["", Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    })
  }

  register() {

    console.log();
    this.userList = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      name: this.registerForm.value.name,
      contact: this.registerForm.value.contact
    }

    console.log("UserList", this.userList);
    this.myProvider.addUser(this.userList);
    console.log("Registration Information: ", this.registerForm);

    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
