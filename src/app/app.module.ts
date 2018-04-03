import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RechercherPage } from '../pages/rechercher/rechercher';
import { AccueilPage } from '../pages/accueil/accueil';
import { AnnoncePage } from '../pages/annonce/annonce';
import { AnnonceFormPage } from '../pages/annonce-form/annonce-form';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccueilPage,
    RechercherPage,
    AnnoncePage,
    AnnonceFormPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
  monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
  monthShortNames: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc' ],
  dayNames:['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'],
 }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccueilPage,
    AnnoncePage,
    AnnonceFormPage,
    RechercherPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    NativeStorage,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
