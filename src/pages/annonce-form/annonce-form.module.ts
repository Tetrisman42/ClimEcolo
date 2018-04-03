import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnonceFormPage } from './annonce-form';

@NgModule({
  declarations: [
    AnnonceFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnonceFormPage),
  ],
})
export class AnnonceFormPageModule {}
