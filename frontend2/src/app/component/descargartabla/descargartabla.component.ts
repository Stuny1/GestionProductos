import { Component, OnInit } from '@angular/core';
import {DatosService} from '../../service/datos.service';
import 'rxjs/Rx' ;
@Component({
  selector: 'app-descargartabla',
  templateUrl: './descargartabla.component.html',
  styleUrls: ['./descargartabla.component.css']
})
export class DescargartablaComponent implements OnInit {

  public tablas;
  public id;

  constructor(private datos: DatosService) {
    this.datos.getTablas().subscribe(data=>{

      this.tablas=data;
      console.log(this.tablas);


    });
  }

  ngOnInit() {
  }


  Descargar(){

    this.datos.Descargar(this.id).subscribe(data=>{
      let URL="http://localhost/tudela/backend/public/storage/"
      console.log(data);

      var win = window.open(URL+data, '_blank');
      


    });


  }




}
