import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Congee } from './congee';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

    constructor(private http:HttpClient) { }
    url: string="https://localhost:44390/api/Congees";
      /****************** ***Edit Product Category*******************/   
  EditConger1(Co:Congee) {
    console.log("Congee id : ",Co.idConger);
    const params = new HttpParams().set('IdConger',Co.idConger+'');
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Statut:Co.statut,Justification:Co.justification,IdEploye:Co.idEploye,IdAdmine:Co.idAdmine,IdConger:Co.idConger
    }
    return this.http.put<Congee>(this.url+'/'+ Co.idConger, body, {headers,params})
  }

}
