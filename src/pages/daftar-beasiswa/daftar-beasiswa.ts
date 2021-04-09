import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PpaPage } from '../ppa/ppa';
import { BbmPage } from '../bbm/bbm';

@IonicPage()
@Component({
  selector: 'page-daftar-beasiswa',
  templateUrl: 'daftar-beasiswa.html',
})
export class DaftarBeasiswaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarBeasiswaPage');
  }

  ppa() {
    this.navCtrl.push(PpaPage);
  }
  bbm() {
    this.navCtrl.push(BbmPage);
  }    

}
