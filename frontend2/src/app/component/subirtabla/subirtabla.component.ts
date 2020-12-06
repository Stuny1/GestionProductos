import { Component, OnInit } from '@angular/core';
import {DatosService} from '../../service/datos.service'
@Component({
  selector: 'app-subirtabla',
  templateUrl: './subirtabla.component.html',
  styleUrls: ['./subirtabla.component.css']
})
export class SubirtablaComponent implements OnInit {

  constructor(private datos: DatosService) { }

  ngOnInit() {

  }
  fileToUpload: File = null;
  formData: FormData = new FormData();


  TomarArchivo(files: FileList) {
    this.fileToUpload = files.item(0);
    this.formData.append('Archivo', this.fileToUpload);
    console.log(this.formData);
  }

  SubirArchivo(){
    console.log(this)
    this.datos.UploadData(this.formData).subscribe(data => {
      alert("Tabla Subida");
      console.log(data);


    })


  }


}
