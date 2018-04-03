import { Component } from '@angular/core';

import { RechercherPage } from '../rechercher/rechercher';
import { AccueilPage } from '../accueil/accueil';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AccueilPage;
  tab3Root = RechercherPage;

  constructor() {

  }
}
