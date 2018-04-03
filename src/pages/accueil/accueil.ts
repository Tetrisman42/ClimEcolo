import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AnnoncePage } from "../annonce/annonce";
import { AnnonceFormPage } from '../annonce-form/annonce-form';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage({ name: "main", segment: "app"} )
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  title1: string;
  descrRapide1: string;
  nomImg1: string;
  id1: number;
  id: any = new Array();

  private valHistorique: any[][];

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage, private camera: Camera, public alertCtrl: AlertController) {

    //this.initHistorique();
    // A remplacer par récup en base -------
    this.id1 = 1;
    this.title1 = "Compresseur mitsubishi mort";
    this.descrRapide1 = "Bonjour, j'ai un problème sur mon compresseur, il ne s'allume plus et j'en ai besoin urgement";
    this.nomImg1 = "probleme-compresseur-mitsubishi.jpg";
    // -------------------------------------
    //this.afficherHistorique();
  }

  private prendrePhoto()
  {
    const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
    }
    var imagePrise;
    this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
      imagePrise = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {this.showAlert("Erreur", "Erreur lors de l'ouverture de la caméra. Code err. : "+err);
    });
    console.log("Fin camera");
    this.goToAnnonceForm(imagePrise);
  }

  public goToAnnonce()
  {
      this.navCtrl.push(AnnoncePage, {titre: this.title1, descrRapide: this.descrRapide1, nomImg: this.nomImg1});
      this.ajouterALHistorique();
    //array_name = [val1,val2,valn..]   //initialization
  }

  public goToAnnonceForm(imagePrise: string)
  {
      this.navCtrl.push(AnnonceFormPage, {image: imagePrise});
  }

  private initHistorique()
  {
    // L'historique existe ?-----
    var historiqueExiste: boolean = false;
    var keys;
    this.nativeStorage.keys().then(
      data => keys = data,
      error => this.showAlert(error+"", "")
    );

    keys.forEach(function (value) {
      if(value = 'historique')
      {
        historiqueExiste = true;
      }
    });
    this.showAlert(historiqueExiste+"", "");
    // --------------------------

    var id = 23;
    var val = [[id+""],["titre23","img23"]];
    /*this.nativeStorage.setItem('historique', {val: val});
    this.nativeStorage.getItem('historique').then(
      data => this.showAlert(data.val[0]+"", data.val[1][0]+""),
      error => this.showAlert(error+"", ""));
      /*data => { this.valHistorique = data.nativeStorage.getItem("historique");//Oui
      error => this.nativeStorage.setItem("historique", { //Non
      valHistorique: this.valHistorique
    });*/
  }

  private ajouterALHistorique()
  {

  }

  private afficherHistorique()
  {

    /*
    <ion-slide>
            <ion-card>
              <img src="./assets/imgs/logoEcolo.jpg"/>
              <ion-card-content >
                <ion-card-title>
                  ClimEcolo
                  </ion-card-title>
              </ion-card-content>
            </ion-card>
    </ion-slide>
    */
  }

  private raffraichirHistorique()
  {

  }

  public showAlert(titleIn, subTitleIn)
  {
    let alert = this.alertCtrl.create({
    title: titleIn,
    subTitle: subTitleIn,
    buttons: ["Ok"]
    });
    alert.present();
  }
}
