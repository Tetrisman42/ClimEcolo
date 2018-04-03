import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RechercherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rechercher',
  templateUrl: 'rechercher.html',
})
export class RechercherPage {

  dateDisabled: boolean;
  positionDisabled: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.dateDisabled = false;
    this.positionDisabled = false;
  }

  public setInputGrey()
  {
    console.log("éqazfazf0");
  }

}
