import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DaftarBeasiswaPage } from '../daftar-beasiswa/daftar-beasiswa';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { DataPribadiPage } from '../data-pribadi/data-pribadi';
import { PPenerimaPage } from '../p-penerima/p-penerima';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {}
  
  daftarBeasiswa() {
    this.navCtrl.push(DaftarBeasiswaPage);
  }
  dataPribadi() {
    this.navCtrl.push(DataPribadiPage);
  }
  pPenerima() {
    this.navCtrl.push(PPenerimaPage);
  }
  about() {
    this.navCtrl.push(AboutPage);
  }
  logout() {
    const alert = this.alertCtrl.create({
      title: 'Logout',
      message: 'Do you want to logout this?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'icon-color',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
          }
        },
        {
          text: 'Ok',
          cssClass:'icon-color',
          handler: data => {
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
    
    this.navCtrl.setRoot(LoginPage);
  }

  slideData = [{ image: "../assets/imgs/1.jpg" },{ image: "../assets/imgs/2.jpg" },{ image: "../assets/imgs/3.jpg" },{ image: "../assets/imgs/4.jpg" }]

}
