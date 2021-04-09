import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BbmPage } from './bbm';

@NgModule({
  declarations: [
    BbmPage,
  ],
  imports: [
    IonicPageModule.forChild(BbmPage),
  ],
})
export class BbmPageModule {}
