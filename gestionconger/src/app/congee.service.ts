import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Congee } from './congee';

@Injectable({
  providedIn: 'root'
})
export class CongeeService {
  url:string="https://localhost:44390/api/Congees/";
  constructor(private http:HttpClient) { }
  /*******************Get Congess*************************** */
  getCongees(id:number){
    return this.http.get<Congee[]>(this.url+"/ByIdEploye/"+id);
  }
  /*******************Get all Congess*************************** */
  getCongee(){
    return this.http.get<Congee[]>(this.url);
  }
  getCongeeById(id){
    return this.http.get<Congee>(this.url+id);
  }
 /***********************Post Congees************************************ */
 AddCongees(Co:Congee) {
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    DateDebut: Co.dateDebut, DateFin:Co.dateFin,Statut:Co.statut,Justification:Co.justification,IdEploye:Co.idEploye,IdAdmine:Co.idAdmine,IdConger:Co.idConger
  }
  return this.http.post<Congee>(this.url, body, { headers })
}
/****************** ***Edit Product Category*******************/   
EditCongees(Co:Congee) {
  console.log("Congee id : ",Co.idConger);
  const params = new HttpParams().set('IdConger',Co.idConger);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    DateDebut: Co.dateDebut, DateFin:Co.dateFin,Statut:Co.statut,Justification:Co.justification,IdEploye:Co.idEploye,IdAdmine:Co.idAdmine,IdConger:Co.idConger
  }
  return this.http.put<Congee>(this.url+'/' + Co.idConger, body, {headers,params})
}
/*********************************Delete Product Category************************************** */
delete(id){
  return this.http.delete(this.url+'/'+id);
}

}

