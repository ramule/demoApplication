import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExperimentPage } from './experiment';

@NgModule({
  declarations: [
    ExperimentPage,
  ],
  imports: [
    IonicPageModule.forChild(ExperimentPage),
  ],
})
export class ExperimentPageModule {}
