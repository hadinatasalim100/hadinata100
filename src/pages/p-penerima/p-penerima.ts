import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-p-penerima',
  templateUrl: 'p-penerima.html',
})
export class PPenerimaPage {
  beasiswa: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HttpClient) {
    this.beasiswa = this.http.get('http://localhost:8081/api/category/:nim/appbeasiswa');
    this.beasiswa
      .subscribe(data => {
      console.log('my data: ', data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PPenerimaPage');
  }

}
