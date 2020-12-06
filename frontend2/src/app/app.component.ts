import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

  ngOnInit() {
  }


  title = 'app works!';
  flag=1;
  ruta="home";

  CambiarRuta(ruta){

    this.ruta=ruta;

  }
}
