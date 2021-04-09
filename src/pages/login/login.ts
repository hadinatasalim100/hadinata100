import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let loader = this.loadingCtrl.create({
      spinner: "dots",
      content: "Loading....",
      duration: 3000
    });

    loader.present();
    
    this.navCtrl.setRoot(HomePage);
  }
}
