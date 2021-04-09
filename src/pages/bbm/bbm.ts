import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-bbm',
  templateUrl: 'bbm.html',
})
export class BbmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BbmPage');
  }

  submit() {
    this.navCtrl.setRoot(HomePage)
  }

}
