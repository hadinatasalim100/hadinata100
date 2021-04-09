import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  slideData = [{ image: "../assets/imgs/1.jpg" },{ image: "../assets/imgs/2.jpg" },{ image: "../assets/imgs/3.jpg" },{ image: "../assets/imgs/4.jpg" }]

}
