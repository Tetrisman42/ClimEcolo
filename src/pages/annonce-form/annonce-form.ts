import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnnonceFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annonce-form',
  templateUrl: 'annonce-form.html',
})
export class AnnonceFormPage {
  image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image = this.navParams.get("image");
  }



}
