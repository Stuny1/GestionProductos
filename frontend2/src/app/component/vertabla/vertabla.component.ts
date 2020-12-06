import { Component, OnInit } from '@angular/core';
import {DatosService} from '../../service/datos.service';
@Component({
  selector: 'app-vertabla',
  templateUrl: './vertabla.component.html',
  styleUrls: ['./vertabla.component.css']
})
export class VertablaComponent implements OnInit {


  public tablas;
  public verTabla;
  public id=0;
  public col;
  public newTabla;
  constructor(private datos: DatosService) {

    this.datos.getTablas().subscribe(data=>{

      this.tablas=data;
      console.log(this.tablas);


    });

  }

  ngOnInit() {
  }


  verT(){

    this.datos.verTabla(this.id).subscribe(data=>{

      this.verTabla=data;
      console.log(Object.keys(this.verTabla[0]));
      this.col=Object.keys(this.verTabla[0]);
      this.newTabla=Object.keys(this.verTabla).map(i => this.verTabla[i]);
      for( var key in this.newTabla ) {
        var value = this.newTabla[key];
        this.newTabla[key]=Object.keys(this.newTabla[key]).map(i => this.newTabla[key][i]);
      }
      console.log(this.newTabla);
    });


  }






}
