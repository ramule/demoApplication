import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoLoginPage } from './demo-login';

@NgModule({
  declarations: [
    DemoLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(DemoLoginPage),
  ],
})
export class DemoLoginPageModule {}
