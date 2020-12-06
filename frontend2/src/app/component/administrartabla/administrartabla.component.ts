import { Component, OnInit } from '@angular/core';
import {DatosService} from '../../service/datos.service'
@Component({
  selector: 'app-administrartabla',
  templateUrl: './administrartabla.component.html',
  styleUrls: ['./administrartabla.component.css']
})
export class AdministrartablaComponent implements OnInit {


  public tablas;
  public id=0;
  public verTabla;
  public col;
  public newTabla;
  public idActualTabla;

  public newData=[];
  public SendData=[];

  constructor(private datos: DatosService) {

    this.datos.getTablas().subscribe(data=>{

      this.tablas=data;
      console.log(this.tablas);


    });

   }

  ngOnInit() {
  }



  verT(){
    this.newData=[];
    this.SendData=[];
    this.idActualTabla=this.id;
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

  AddInput(codigo,campo,valor){



    if(typeof this.SendData[codigo]!=='undefined'){
      this.SendData[codigo][this.col[campo]]=valor;

      console.log("Entra")

    }
    else{
      this.SendData[codigo]={};
      this.SendData[codigo][this.col[campo]]=valor;
      console.log("Entra2")
    }






  }

  EnviarData(){
    console.log(this.SendData);
    this.datos.SendData(this.SendData,this.idActualTabla).subscribe(data =>{
      alert("Cambios Relizados");
      this.verT();
      console.log(data);


    })

  }


}
