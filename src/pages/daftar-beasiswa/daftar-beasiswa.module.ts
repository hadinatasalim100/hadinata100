import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaftarBeasiswaPage } from './daftar-beasiswa';

@NgModule({
  declarations: [
    DaftarBeasiswaPage,
  ],
  imports: [
    IonicPageModule.forChild(DaftarBeasiswaPage),
  ],
})
export class DaftarBeasiswaPageModule {}
