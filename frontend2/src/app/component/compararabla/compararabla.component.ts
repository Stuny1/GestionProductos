import { Component, OnInit } from '@angular/core';
import {DatosService} from '../../service/datos.service';
@Component({
  selector: 'app-compararabla',
  templateUrl: './compararabla.component.html',
  styleUrls: ['./compararabla.component.css']
})
export class CompararablaComponent implements OnInit {
  public tablas;
  public id1=0;
  public id2=0;
  public comparacion;
  public col;
  constructor(private datos: DatosService) {
    this.datos.getTablas().subscribe(data=>{

      this.tablas=data;
      console.log(this.tablas);


    });
   }

  ngOnInit() {
  }

  change(){

    console.log(this.id1);
    console.log(this.id2);


  }

  comparar(){

    if(this.id1!=0 && this.id2!=0){

      this.datos.comparar(this.id1,this.id2).subscribe(data => {

        console.log(data);
        this.col=Object.keys(data[0]);
        console.log(this.col);
        this.comparacion=data;


      });

    }



  }



}
