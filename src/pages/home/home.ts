import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hideMail:boolean = true;
  hideTel:boolean = false;

  mail: string;
  tel: string;

  login: string;
  password: string;


  logintest: string;
  passwordtest: string;

  authType: string = "logIn";
  authLabelContent: string;
  authBtnContent: string = "Connexion";

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage, public alertCtrl: AlertController){
      this.authLabelContent = "Pas encore inscrit ?";
  }

  private logSignIn()
  {
    this.setLogin();

    switch(this.authType)
    {
      // Inscription -------------------
      case "signIn" :
      this.nativeStorage.setItem('user', {
        login: this.login,
        password: this.password
      })
      .then(
        () => this.showAlert('Inscription terminée !' , 'Vous pouvez maintenant vous connecter.'),
        error => this.showAlert('Erreur', 'Une erreur s\'est produite')
      ); break;

      // Connexion -------------------
      case "logIn" :
      if(this.validateLogin())
        {
          this.showAlert('Confirmation', 'Vous êtes maintenant connecté');
        }
      else
      {
        this.showAlert('Erreur', 'L\'email ou le mot de passe est incorrect');
      }
    }
  }

  private validateLogin()
  {
      var mailPswOk;
      this.nativeStorage.getItem('user')
      .then(
        data => {
        this.logintest = data.login;
        this.passwordtest = data.password,
        error => console.error('Une erreur s\'est produite', error)

      });

      if(this.logintest == this.login && this.passwordtest == this.password) {
        mailPswOk = true;
      }
      else{
        mailPswOk = false;
      }
      //this.showAlert(logintest, passwordTest);
      return mailPswOk;
  }

  public setLogin()
  {
    if(this.hideMail) // == true
    {
      this.login = this.tel;
    }
    if(this.hideTel)
    {
      this.login = this.mail;
    }
  }

  public SwitchAuthentification()
  {
    switch(this.authType)
    {
      case "logIn": this.authType = "signIn"; this.showSignIn(); break;
      case "signIn": this.authType = "logIn"; this.showLogIn(); break;
    }
  }

  private showSignIn(): void
  {
    this.authLabelContent = "Déjà inscrit ?";
    this.authBtnContent = "Inscription";
  }

  private showLogIn(): void
  {
    this.authLabelContent = "Pas encore inscrit ?";
    this.authBtnContent = "Connexion";
  }

  public mailToTel(): void
  {
      this.hideMail = !this.hideMail;
      this.hideTel = !this.hideTel;
  }

  public telToMail(): void
  {
      this.hideTel = !this.hideTel;
      this.hideMail = !this.hideMail;
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
