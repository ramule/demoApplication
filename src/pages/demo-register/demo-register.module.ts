import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoRegisterPage } from './demo-register';

@NgModule({
  declarations: [
    DemoRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(DemoRegisterPage),
  ],
})
export class DemoRegisterPageModule {}
