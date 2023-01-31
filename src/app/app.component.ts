import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ijijij';
  count = 0;
  prodottiSezionati = [1,43,54];
  prodotti = [{},{},{}];

  cambia() {
    this.title = 'Nuovo';

    this.prodottiSezionati.forEach((p) => {
      console.log(this);
    });
  }

  aumenta() {
    this.count++;
  }

  diminuisci(){
    this.count--;
  }
}
