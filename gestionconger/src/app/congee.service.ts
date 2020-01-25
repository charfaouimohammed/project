import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Congee } from './congee';

@Injectable({
  providedIn: 'root'
})
export class CongeeService {
  url:string="https://localhost:44390/api/Congees";
  constructor(private http:HttpClient) { }
  /*******************Get Congess*************************** */
  getCongees(id:number){
    return this.http.get<Congee[]>(this.url+"/ByIdEploye/"+id);
  }
 /***********************Post Congees************************************ */
 AddCongees(Co:Congee) {
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    DateDebut: Co.DateDebut, DateFin:Co.DateFin,Statut:Co.Statut,Justification:Co.Justification,IdEploye:Co.IdEploye,IdAdmine:Co.IdAdmine,IdConger:Co.IdConger
  }
  return this.http.post<Congee>(this.url, body, { headers })
}
/****************** ***Edit Product Category*******************/   
EditCongees(Co:Congee) {
  console.log("Congee id : ",Co.IdConger);
  const params = new HttpParams().set('IdConger',Co.IdConger);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    DateDebut: Co.DateDebut, DateFin:Co.DateFin,Statut:Co.Statut,Justification:Co.Justification,IdEploye:Co.IdEploye,IdAdmine:Co.IdAdmine,IdConger:Co.IdConger
  }
  return this.http.put<Congee>(this.url+'/' + Co.IdConger, body, {headers,params})
}
/*********************************Delete Product Category************************************** */
delete(id){
  return this.http.delete(this.url+'/'+id);
}

}
