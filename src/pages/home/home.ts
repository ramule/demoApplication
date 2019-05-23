import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { NgxQRCodeModule } from 'ngx-qrcode2';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  qrData: string = '';
  createdCode: any = {};
  scannedCode: any = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    public toast: ToastController,
    public menu: MenuController) {
    menu.enable(true);
  }


  createCode() {

    this.createdCode = this.qrData;
  }

  openMenu() {
    this.menu.toggle();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: 'Welcome to our application',
          duration: 3000
        }).present();
      }

      else {
        this.toast.create({
          message: 'could not find authentication details',
          duration: 3000
        }).present();
      }
    })
  }
}
