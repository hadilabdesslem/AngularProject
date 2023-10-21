import { Component } from '@angular/core';

@Component({
  selector: 'app-couleur-component',
  templateUrl: './couleur-component.component.html',
  styleUrls: ['./couleur-component.component.css']
})
export class CouleurComponentComponent {
  couleur: string = 'white'; // couleur par défaut du div
  inputCouleur: string = '';

  changeCouleur() {
    this.couleur = this.inputCouleur;
  }

  resetCouleur() {
    this.couleur = 'red';
  }
}
