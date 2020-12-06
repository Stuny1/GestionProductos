import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  BaseUrl="http://localhost/tudela/backend/public/api/";

  public UploadData(formData):Observable<any>{
    return this.http.post<any>(this.BaseUrl+"Ver",formData);
  }

  public getTablas():Observable<any>{
    return this.http.post<any>(this.BaseUrl+"GetTabla",{data:""});
  }

  public comparar(id1,id2):Observable<any>{
    return this.http.post<any>(this.BaseUrl+"comparar",{id1:id1,id2:id2});
  }

  public verTabla(id):Observable<any>{

    return this.http.post<any>(this.BaseUrl+"verTabla",{id:id});
  }

  public SendData(data,id):Observable<any>{

    return this.http.post<any>(this.BaseUrl+"ChangeData",{data:data,id:id});
  }

  public Descargar(id):Observable<any>{

    return this.http.post<any>(this.BaseUrl+"Descargar",{id:id});
  }

}
