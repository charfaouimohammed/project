import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Employer } from '../employer';
import { GridApi, ColumnApi } from 'ag-grid-community';
import { EmployerService } from '../employer.service';
import { Congee } from '../congee';
import { CongeeService } from '../congee.service';
import {MatButtonModule} from '@angular/material'
import { AddCongeesComponent } from '../add-congees/add-congees.component';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Emp } from '../emp';

export{
  MatButtonModule
}


@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  constructor(private service:CongeeService,private ser:EmployerService, private router:Router,
    private rout:ActivatedRoute) { 
  }
  $congees=new EventEmitter();
    /***********************test if row is selected or not******************************** */
    tes:string;
    StObjet:Congee[];
    private rowSelection;
    isMultiple:boolean = false;
    private SelectedClient:Congee;
     IsRowSelected: boolean = false;
    IsMultiple: boolean = true;
    onSelectionChanged(event) {
      if (this.api.getSelectedRows().length == 0) {
        this.IsRowSelected = false;
        this.isMultiple = true
      } else {
        this.IsRowSelected = true;
        this.StObjet=this.api.getSelectedRows();
            this.id=this.api.getSelectedRows()[0].idConger;
           console.log("id again:",this.id);
      }
  }
  id:number;
  list2:string;
    /********************Delete*******************h */
    delete(id:number){
      this.service.delete(id).subscribe(res=>{
        this.loadData();
        alert("suppression bien faite");
      })
    }
    /****************Dif************************* */
  columnDefs = [
    {
     headerName: "IdConger",
     field:"idConger",
     checkboxSelection:true
    },
    {
      headerName: 'DateDebut', 
      field:'dateDebut'
    },
    {
      headerName:'DateFin',
       field:'dateFin'
    },
    {
      headerName: 'Statut',
       field:'statut'
      },
    {
      headerName: 'Justification',
       field:'justification'
      },
];
listCongess:Congee[];
loadData(){
  this.service.getCongeesByEmployeId(this.employeId).subscribe((temp)=>{
    this.listCongess=temp;
    console.log("this.list",this.listCongess);
  });
}
/****************variables ag-grid*********** */
private api:GridApi;
private colmunApi:ColumnApi;
/*****************Fill ag grid********** */
onGridReady(params):void{
  this.api=params.api;
  this.colmunApi=params.colmunApi;
  this.api.sizeColumnsToFit();
  this.loadData();
}
employeId
  ngOnInit() {
    this.employeId = this.rout.snapshot.paramMap.get('id');
    console.log("employe Id : ",this.employeId);
    this.loadData();
    this.getEmpbyUser();
    

  }
  /***************************update *****************************h*/
  modif(){
    if (this.id==null) {
      alert("choose congee !!!!!");
    }else{
      this.router.navigate(['addCongees/',this.id]);

    }
  }
  Empl:Employer
  getEmpbyUser(){
    if(this.user==null){

    }else{
      this.ser.getUserByUsername(this.user).subscribe((res)=>{
        this.Empl=res;
        console.log("id Employer fro mloing",this.Empl.nom)
        console.log("Emp",this.Empl)
      })
    }
    
  }
  user=localStorage.getItem("UserName");
 
}
