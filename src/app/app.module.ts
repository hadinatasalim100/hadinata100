import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { DaftarBeasiswaPage } from '../pages/daftar-beasiswa/daftar-beasiswa';
import { PpaPage } from '../pages/ppa/ppa';
import { BbmPage } from '../pages/bbm/bbm';
import { AboutPage } from '../pages/about/about';
import { DataPribadiPage } from '../pages/data-pribadi/data-pribadi';
import { PPenerimaPage } from '../pages/p-penerima/p-penerima'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DaftarBeasiswaPage,
    PpaPage,
    BbmPage,
    DataPribadiPage,
    PPenerimaPage,
    AboutPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DaftarBeasiswaPage,
    PpaPage,
    BbmPage,
    DataPribadiPage,
    PPenerimaPage,
    AboutPage
  ],
  providers: [
    HttpModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
