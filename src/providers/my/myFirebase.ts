
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the MyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyProvider {

  value : any;

  constructor(
  public afd : AngularFireDatabase) {
    console.log('Hello MyProvider Provider');
    this.value = this.afd.object('/Users/');
    console.log("values", this.value);
  }

  getAllUsers(){
    return this.afd.list('/Users/');
  }

  addUser(user){
    return this.afd.list('/Users/').push(user);
  }

}
