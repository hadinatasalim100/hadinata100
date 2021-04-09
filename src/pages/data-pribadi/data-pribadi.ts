import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-data-pribadi',
  templateUrl: 'data-pribadi.html',
})
export class DataPribadiPage {
  beasiswa: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HttpClient) {
    this.beasiswa = this.http.get('http://localhost:8081/api/category/:nim/appbeasiswa');
    this.beasiswa
      .subscribe(data => {
      console.log('my data: ', data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataPribadiPage');
  }

  submit() {
    this.navCtrl.push(HomePage)
  }

}
