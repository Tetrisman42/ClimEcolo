import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annonce',
  templateUrl: 'annonce.html',
})
export class AnnoncePage {
  titre: string;
  description: string;
  nomImg: string;
  date: string;
  tarif: number;
  negociable: string;

  typeAcces: string;

  cacherAffichage: boolean;
  cacherFormulaire: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titre = this.navParams.get("titre");


    // A remplacer par récup en base -------
    this.cacherAffichage = false;
    this.cacherFormulaire = true;
    this.description = this.navParams.get("descrRapide");
    this.nomImg = this.navParams.get("nomImg");
    this.date = "27/03/2018 - 10h33";
    this.tarif = 50;
    this.negociable = "Oui";
      // -------------------------------------
    }
  }
